// server.js
import express from 'express';
import bcrypt from 'bcryptjs'
// import dotenv from 'dotenv';
// import cookieParser from 'cookie-parser';
// import connectDB from './config/db.js';
// import authRoutes from './routes/authRoutes.js';

// dotenv.config();
// connectDB();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
// app.use(cookieParser());

// app.use('/api/auth', authRoutes);
app.post('/api/login',async(req,res)=>{
  const {email,password}=req.body;
  const hash= await bcrypt.hash(password, 10);
  console.log(hash)
  res.send({email,password:hash})
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
