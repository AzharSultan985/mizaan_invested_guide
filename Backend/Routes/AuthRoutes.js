import express from 'express';
import RegisterUserController from '../controller/registerUser.js';
import VerifyOTPController from '../controller/VerifyOTP.js';
import LoginUserController from '../controller/LoginUser.js';
import ResendOTPController from '../controller/ResendOTP.js';
import ForgotPasswordController from '../controller/forgetpassword.js';
import ForgotVerifyOTPController from '../controller/forgotOTPVerify.js';
import ChangePasswordController from '../controller/updatePass.js';
import AuthMiddleware from '../MiddleWare/middleware.js';
import LogoutController from '../controller/Logout.js';

const router =express.Router();


router.post('/auth/registeruser',RegisterUserController)
router.post('/auth/resend-verify-otp',ResendOTPController)

router.post('/auth/verify-otp',VerifyOTPController)
router.post('/auth/loginuser',LoginUserController)
router.post('/auth/forgot-password',ForgotPasswordController)
router.post('/auth/forgot-verify-otp',ForgotVerifyOTPController)
router.post('/auth/changePassoword',ChangePasswordController)
router.post('/auth/logout',LogoutController)
router.get("/auth/check-me", AuthMiddleware, (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
});



export default router;
