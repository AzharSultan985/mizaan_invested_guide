import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import  AuthRoutes  from './Routes/AuthRoutes.js'
import  userRoutes  from './Routes/userRoutes.js'
import connectDb from "./config/mongodb.js";
import cookieParser from "cookie-parser";
import path from "path";
dotenv.config();

const app = express();
//mongoDB connection 
connectDb();    


// Middlewares
app.use(cors({
  origin: true,
  credentials: true,    
}));
app.use(express.json());
app.use(cookieParser())
// Routes
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Mizaan Investor API is running.",
    });
});

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use('/api', AuthRoutes)
app.use('/api/user', userRoutes)
// Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});