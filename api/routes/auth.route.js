import express from 'express';
import { changeCurrentPassword, getCurrentUser, loginUser, logoutUser, registerUser } from '../controllers/user.controller.js';
import { upload } from '../middleware/multer.middleware.js';
import { verifyJWT } from '../middleware/auth.middleware.js';

const router=express.Router()

router.post('/register',upload.single('avatar'), registerUser);
router.post('/login', loginUser);
router.post('/logout',verifyJWT, logoutUser);
router.post('/updatepassword',verifyJWT, changeCurrentPassword);
router.get('/getuser',verifyJWT, getCurrentUser);

export default router