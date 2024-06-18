import dotenv from "dotenv"
import connectDB from "./DB/index.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})
const port= process.env.PORT || 5000
connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



