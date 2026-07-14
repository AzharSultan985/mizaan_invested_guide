import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/user.js";

const ChangePasswordController = async (req, res) => {
  try {
    const {password } = req.body;
// console.log("Request Body:", req.body);
// console.log("New Password:", password);

// console.log("Type Password:", typeof password);
// console.log("Type Stored Password:", typeof user.password);
    // Validation
    if (!password ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    // Read reset token from cookie
    const resetToken = req.cookies.resetToken;

    if (!resetToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request.",
      });
    }

    // Verify JWT
    let decoded;

    try {
      decoded = jwt.verify(resetToken, process.env.JWT_SECRET);
    } catch {
      return res.status(401).json({
        success: false,
        message: "Reset session expired. Please verify OTP again.",
      });
    }

    // Ensure token is only for password reset
    if (decoded.purpose !== "reset-password") {
      return res.status(401).json({
        success: false,
        message: "Invalid reset token.",
      });
    }

    // Find user
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }
// console.log("User:", user);
// console.log("Stored Password:", user.password);
    // Prevent using same password
    const isSamePassword = await bcrypt.compare(
      password,
      user.password
    );

    if (isSamePassword) {
      return res.status(400).json({
        success: false,
        message: "New password cannot be the same as your current password.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    user.password = hashedPassword;

    await user.save();

    // Remove reset cookie
    res.clearCookie("resetToken");

    return res.status(200).json({
      success: true,
      message: "Password updated successfully. Please login.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export default ChangePasswordController;