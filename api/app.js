import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import authRoute from './routes/auth.route.js'
const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use('/api/v1/auth',authRoute)
export { app }