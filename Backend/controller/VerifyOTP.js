import jwt from "jsonwebtoken";
import User from "../Models/user.js";

const VerifyOTPController = async (req, res) => {
  try {
    const { otp } = req.body;

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.emailVerification) {
      return res.status(400).json({
        success: false,
        message: "Email already verified",
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
if (
  user.emailVerificationOTPExpires &&
  user.emailVerificationOTPExpires > new Date(Date.now() + 60 * 1000)
) {
  return res.status(429).json({
    success: false,
    message: "Please wait before requesting another OTP.",
  });
}
    user.isEmailVerifeid = true;
    user.emailVerificationOTP = undefined;
    user.emailVerificationOTPExpires = undefined;

    await user.save();

    res.clearCookie("token");

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default VerifyOTPController;