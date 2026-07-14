import User from "../Models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const LoginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ==========================
    // Validation
    // ==========================
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // ==========================
    // Find User
    // ==========================
    const user = await User.findOne({ email });

    // Don't reveal whether email exists
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // ==========================
    // Email Verification Check
    // ==========================
    if (!user.isEmailVerifeid) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in.",
      });
    }

    // ==========================
    // Compare Password
    // ==========================
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // ==========================
    // Generate JWT
    // ==========================
    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // ==========================
    // Set Secure Cookie
    // ==========================
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 1000, // 1 Hour
    });

    // ==========================
    // Success
    // ==========================
    return res.status(200).json({
      success: true,
      message: "Login successful.",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export default LoginUserController;