import User from "../Models/user.js";
import sendEmail from "../utils/sendEmail.js";

const ResendOTPController = async (req, res) => {
  try {
    const { email } = req.body;

    // ==========================
    // Validation
    // ==========================
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    // ==========================
    // Find User
    // ==========================
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // ==========================
    // Already Verified
    // ==========================
    if (user.emailVerification) {
      return res.status(400).json({
        success: false,
        message: "Email is already verified.",
      });
    }

    // ==========================
    // Generate New OTP
    // ==========================
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const otpExpire = new Date(Date.now() + 2 * 60 * 1000);

    user.emailVerificationOTP = otp;
    user.emailVerificationOTPExpires = otpExpire;

    await user.save();

    // ==========================
    // Send Email
    // ==========================
    await sendEmail(user.email, otp);

    return res.status(200).json({
      success: true,
      message: "A new OTP has been sent to your email.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export default ResendOTPController;