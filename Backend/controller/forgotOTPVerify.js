import jwt from "jsonwebtoken";
import User from "../Models/user.js";

const ForgotVerifyOTPController = async (req, res) => {
  try {
    const { otp, email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (
      !user.emailVerificationOTPExpires ||
      user.emailVerificationOTPExpires < new Date()
    ) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired",
      });
    }

    if (user.emailVerificationOTP !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    // Clear OTP
    user.emailVerificationOTP = undefined;
    user.emailVerificationOTPExpires = undefined;

    await user.save();

    // Temporary JWT for password reset
    const resetToken = jwt.sign(
      {
        id: user._id,
        purpose: "reset-password",
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );

    // Store in cookie
    res.cookie("resetToken", resetToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 10 * 60 * 1000, // 10 minutes
    });

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully. You can now change your password.",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default ForgotVerifyOTPController;