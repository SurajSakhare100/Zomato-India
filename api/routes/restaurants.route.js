import express from 'express';
import { getAllRestaurants, registerRestaurant, updateRestaurant,getRestaurant } from '../controllers/restaurants.controller.js';
import { upload } from '../middleware/multer.middleware.js';
const router=express.Router()
router.post('/register',upload.single('restaurant_image'), registerRestaurant);
router.get('/getallrestaurants', getAllRestaurants);
router.get('/getrestaurant/:id', getRestaurant);
router.post('/updaterestaurant',upload.single('restaurant_image'), updateRestaurant);

export default router