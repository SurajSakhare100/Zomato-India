// restaurants.controller.js
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Restaurant from "../models/restaurants.model.js";

const registerRestaurants = asyncHandler(async (req, res) => {
  try {
    const { username,name, address, email } = req.body;
    console.log({ username,name, address, email});
    // Check for required fields
    if (![username, name, address, email].every(field => field && field.trim() !== "")) {
      throw new ApiError(400, "All fields are required");
    }

    // Check if the restaurant already exists
    const existedRestaurant = await Restaurant.findOne({ username });

    if (existedRestaurant) {
      throw new ApiError(409, "Restaurant already exists");
    }

    // Check for uploaded image
    const restaurant_image = req.file?.path;
    if (!restaurant_image) {
      throw new ApiError(400, "Restaurant image file is required");
    }

    // Upload image to Cloudinary
    const avatar = await uploadOnCloudinary(restaurant_image);
    if (!avatar) {
      throw new ApiError(400, "Failed to upload image");
    }

    // Create new restaurant
    const restaurant = await Restaurant.create({
      username: username.toLowerCase(),
      name,
      email,
      address,
      avatar: avatar.url,
    });

    const createdRestaurant = await Restaurant.findById(restaurant._id);

    if (!createdRestaurant) {
      throw new ApiError(500, "Something went wrong while registering the restaurant");
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdRestaurant, "Restaurant registered successfully"));
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

export {
  registerRestaurants
}
