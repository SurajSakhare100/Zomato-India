import mongoose, { Schema } from "mongoose";

const DishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dish_image: {
      type: Boolean,
      default: true,
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
