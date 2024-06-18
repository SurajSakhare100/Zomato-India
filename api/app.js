import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from './routes/auth.route.js';
import dishRoute from './routes/dish.route.js';
import restaurantsRoute from './routes/restaurants.route.js';

const app = express();

// Apply CORS middleware
app.use(cors({
  origin: 'https://zomatoindia.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Other middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Route middlewares
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/dish', dishRoute);
app.use('/api/v1/restaurant', restaurantsRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://zomatoindia.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(err.status || 500).json({
    message: err.message,
    error: err
  });
});

export { app };
