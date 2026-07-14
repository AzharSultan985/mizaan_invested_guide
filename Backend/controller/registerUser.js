import express from 'express';
import User from '../Models/user.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sendEmail from '../utils/sendEmail.js';

const RegisterUserController =async (req,res)=>{
try{


const {fullName,email,password}=req.body;

// check if user already exists
const IsEmailExist= await User.findOne({email});
if (IsEmailExist){
return res.status(400).json({
    success:false,
    message:"Email already register"
})} 
console.log("user comes");

// otp generate
const otp=Math.floor(100000+  Math.random()*900000).toString()
const otpExpire=new Date(Date.now()+2*60*1000)

const hashpassword=await bcrypt.hash(password,12)
//create user 

const user=await User.create({
    fullname:fullName,
    email,
    password:hashpassword,
    emailVerificationOTP:otp,
    emailVerificationOTPExpires:otpExpire
})

await sendEmail(user.email, otp);

//jwt 
const token =jwt.sign(
    {
        id:user._id,
        // email:user.email
    },
    process.env.JWT_SECRET,{
 expiresIn: "1d", // ✅ Correct

    }
)

res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 24 * 60 * 60 * 1000,
});
console.log(user);


return res.status(201).json({
    success:true,
    message:"User register successfully! Please verify your email",
    token
})







}catch(error){
console.error(error)
return res.status(500).json({
    success:false,
    message:"internal server errror"
})

}

}

export default RegisterUserController;