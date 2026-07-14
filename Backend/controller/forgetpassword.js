import User from "../Models/user.js";
import sendEmail from "../utils/sendEmail.js";

const ForgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
console.log(req.body);
console.log(typeof req.body);
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
        message: "No account found with this email.",
      });
    }

    // ==========================
    // Email Verification Check
    // ==========================
    if (!user.isEmailVerifeid) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email first.",
      });
    }

    // ==========================
    // Generate OTP
    // ==========================
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    user.emailVerificationOTP = otp;
    user.emailVerificationOTPExpires = new Date(
      Date.now() + 2 * 60 * 1000
    );

    await user.save();

    // ==========================
    // Send Email
    // ==========================
    await sendEmail(user.email, otp);

    return res.status(200).json({
      success: true,
      message: "Password reset OTP sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export default ForgotPasswordController;