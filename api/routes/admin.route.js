import express from 'express';
import { addDish } from '../controllers/admin.conroller.js';
const router=express.Router()

router.post('/adddish', addDish);

export default router