import mongoose, { Schema } from "mongoose";

const DishSchema = new Schema(
  {
    dishname: {
      type: String,
      required: true,
    },
    dish_image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Dish = mongoose.model("Dish", DishSchema);

export default Dish;
