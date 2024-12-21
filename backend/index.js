import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
const port=process.env.PORT ;

import userRoutes from './routes/userRoutes.js';
app.use("/api/user",userRoutes);
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
    connectDb();
});