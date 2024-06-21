import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB is connected");
})
.catch((err) => {
    console.log(err);
});


const app=express();

app.use(express.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow the specified methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow the specified headers
    next();
});




app.use(cookieParser());


app.listen(3000, () => {
    console.log('Server is running on 3000! ');
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);
// Middleware
app.use((err,req,res,next)=> {
    const statusCode=err.statusCode||500;
    const message= err.message||'Internal Server Error';
    res.status(statusCode).json({
        success:false,
        statusCode,
        message
    });
});