import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoute from './routes/auth.route.js'
import adminRoute from './routes/admin.route.js'
import restaurantsRoute from './routes/restaurants.route.js'
const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/admin',adminRoute)
app.use('/api/v1/restaurant',restaurantsRoute)

export { app }