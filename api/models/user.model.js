import mongoose, { Schema } from "mongoose";
const userSchema = new Schema( {
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true, 
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowecase: true,
        trim: true, 
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String
    }

},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
export default User;
