import mongoose, { Schema } from "mongoose";

const RestaurantSchema= new Schema(
    {
        username:{
            type: String, 
            required: true 
        },
        name: { 
            type: String, 
            required: true 
        },
        address: { 
            type: String ,
            required:true
        },
        email: { 
            type: String, 
            required: true 
        },
        dish: { 
            type: Schema.Types.ObjectId,
            ref: "Dish"

        },
        restaurant_image:{
            type:String,
            required:true
        }
    },
    {
        timestamps: true,
    }
);

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
