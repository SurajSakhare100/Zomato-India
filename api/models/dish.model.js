import mongoose, { Schema } from "mongoose";

const DishSchema = new Schema(
    {
        dish_id: { type: String, required: true, unique: true },
        // restaurant_id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        available: { type: Boolean, default: true },
    },
    {
        timestamps: true,
    }
);

const Dish = mongoose.model("Dish", DishSchema);

export default Dish;
