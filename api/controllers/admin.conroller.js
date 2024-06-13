import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Dish from "../models/dish.model.js";

const addDish = asyncHandler(async (req, res) => {
  try {
    const { dishname, description, price } = req.body;

    // if (!dishname || !description || !price) {
    //   throw new ApiError(400, "All fields are required");
    // }
console.log(dishname,description, price)
    const trimmedDishname = dishname.trim();
    const trimmedDescription = description.trim();

    if ([trimmedDishname, trimmedDescription].some((field) => field === "")) {
      throw new ApiError(400, "All fields are required");
    }

    // Create a new food item
    const newFood = new Dish({
      dish_id: `food_${Date.now()}`, // Generate a unique ID for the food item
    //   restaurant_id: req.restaurant_id, // Assuming restaurant_id is available in the request context
      name: trimmedDishname,
      description: trimmedDescription,
      price: parseFloat(price),
      available: true,
    });

    await newFood.save();

    return res.status(201).json(new ApiResponse(201, newFood));
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

export {
  addDish
};
