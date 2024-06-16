import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import Dish from "../models/dish.model.js";
import { uploadOnCloudinary } from "../utils/cloudnary.js";
// import mongoose from "mongoose";

const addDish = asyncHandler(async (req, res) => {
  try {
    const { dishname, price } = req.body;
    console.log(dishname,price)
    if (
      ![dishname, price ].every(
        (field) => field && field.trim() !== ""
      )
    ) {
      throw new ApiError(400, "All fields are required");
    }
    // const existedDish = await Dish.findOne({ dishname });

    // if (existedDish) {
    //   throw new ApiError(409, "Dish already exists");
    // }
    const dish_image = req.file?.path;
    if (!dish_image) {
      throw new ApiError(400, "Dish image file is required");
    }

    // Upload image to Cloudinary
    const avatar = await uploadOnCloudinary(dish_image);
    if (!avatar) {
      throw new ApiError(400, "Failed to upload image");
    }

    // Create new restaurant
    const dish = await Dish.create({
      dishname: dishname,
      dish_image: avatar.url,
      price,
    });
    console.log(dish)
    // const createdDish= await Dish.findById(dish._id);

    // if (!createdDish) {
    //   throw new ApiError(
    //     500,
    //     "Something went wrong while registering the Dish"
    //   );
    // }

    return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        dish,
        "Dish registered successfully"
      )
    );
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    res.status(500).json({ error: "Internal server error" });
  }
});
const getAllDishes = asyncHandler(async (req, res) => {
  try {
    const dishes = await Dish.find();
    return res
        .status(201)
        .json(
          new ApiResponse(
            200,
            dishes,
            "Restaurant get successfully"
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

const getDish = asyncHandler(async (req, res) => {
  try {
    const DishId = req.params.id;
    const dish = await Dish.findById(DishId);
    if (!dish) {
      throw new ApiError(404, "Dish not found");
    }
    return res
      .status(200) // 200 status code for successful retrieval
      .json(
        new ApiResponse(
          200,
          dish,
          "Dish retrieved successfully"
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

const getDishName=asyncHandler(async(req,res)=>{
    try {
      const dishname= await Dish.find({dishname:{$exists: true }})
      return res
        .status(201)
        .json(
          new ApiResponse(
            200,
            dishname,
            "Restaurant get successfully"
          )
        );
    } catch (error) {
      if (error instanceof ApiError) {
        res.status(error.statusCode).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
})
const getDishesOfRestaurant=asyncHandler(async(req,res)=>{
 try {
  const ids=req.query.ids;
   const dishes=await Dish.find({_id:{$in:ids}})
   return res
         .status(201)
         .json(
           new ApiResponse(
             200,
             dishes,
             "Dishes get successfully"
           )
         );
 } catch (error) {
  
  if (error instanceof ApiError) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    res.status(500).json({ error: "Internal server error" });
  }
 }
})
export { 
  addDish,
  getAllDishes,
  getDish,
  getDishName,
  getDishesOfRestaurant
 };
