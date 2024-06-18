import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoute from './routes/auth.route.js'
import dishRoute from './routes/dish.route.js'
import restaurantsRoute from './routes/restaurants.route.js'
const app = express()
const origin=process.env.ORIGIN;
app.use(cors({
    origin,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/dish',dishRoute)
app.use('/api/v1/restaurant',restaurantsRoute)

export { app }