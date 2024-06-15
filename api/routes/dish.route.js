import express from 'express';
import { addDish, getAllDishes, getDish, getDishName } from '../controllers/dish.controller.js';
import { upload } from '../middleware/multer.middleware.js';
const router=express.Router()

router.post('/adddish', upload.single('dish_image'),addDish);
router.get('/getalldishes',getAllDishes);
router.get('/getdish/:id',getDish);
router.get('/getdishname',getDishName);


export default router