// restaurants.controller.js
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Restaurant from "../models/restaurants.model.js";

const registerRestaurant = asyncHandler(async (req, res) => {
  try {
    const { username, name, address, email, ratings, description } = req.body;
    if (
      ![username, name, address, email].every(
        (field) => field && field.trim() !== ""
      )
    ) {
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
      restaurant_image: avatar.url,
      ratings,
      description,
    });

    const createdRestaurant = await Restaurant.findById(restaurant._id);

    if (!createdRestaurant) {
      throw new ApiError(
        500,
        "Something went wrong while registering the restaurant"
      );
    }

    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          createdRestaurant,
          "Restaurant registered successfully"
        )
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

const getAllRestaurants = asyncHandler(async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    return res
      .status(201)
      .json(new ApiResponse(200, restaurants, "Restaurant get successfully"));
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});
const getRestaurant = asyncHandler(async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      throw new ApiError(404, "Restaurant not found");
    }
    return res
      .status(200) // 200 status code for successful retrieval
      .json(
        new ApiResponse(200, restaurant, "Restaurant retrieved successfully")
      );
  } catch (error) {
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

const updateRestaurant = asyncHandler(async (req, res) => {
  try {
    const { username, name, email, address, ratings, description } = req.body;

    const updatedRestaurant = await Restaurant.findOneAndUpdate(
      { username: username.toLowerCase() }, // Correct query format
      {
        $set: {
          username: username.toLowerCase(),
          name,
          email,
          address,
          ratings,
          description,
        },
      },
      { new: true }
    );

    return res
      .status(200) // 200 status code for a successful update
      .json(
        new ApiResponse(
          200,
          updatedRestaurant,
          "Restaurant updated successfully"
        )
      );
  } catch (error) {
    // Correct error handling
    if (error instanceof ApiError) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

const addDishes = asyncHandler(async (req, res) => {
 try {
   const { dishes } = req.body;
   const updatedRestaurant=await Restaurant.findByIdAndUpdate(
     '666d5c22b50c4308a8d7d8cb',
     {$set: {
       dishes: dishes,
     }
     },
     {
       new: true,
     }
   );
   return res
      .status(200) // 200 status code for a successful update
      .json(
        new ApiResponse(
          200,
          updatedRestaurant,
          "Restaurant updated successfully"
        )
      );
 } catch (error) {
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    res.status(500).json({ error: "Internal server error" });
  }
 }
});

export {
  registerRestaurant,
  getAllRestaurants,
  updateRestaurant,
  getRestaurant,
  addDishes,
};
