import express from 'express';
import { registerRestaurants } from '../controllers/restaurants.controller.js';
const router=express.Router()

router.post('/registerRestraurants',registerRestaurants);

export default router