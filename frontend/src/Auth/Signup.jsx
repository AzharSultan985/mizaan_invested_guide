import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
// Ensure Alert is imported or handled properly if used here. 
// (It seems your context handles the Alert state, so no direct component render is needed here unless specified otherwise)

export default function Signup() {
  const { signup, alert, setAlert } = useAuth();
  
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword, agree } = signupData;

    // Check required fields
    if (!fullName || !email || !password || !confirmPassword) {
      setAlert({
        show: true,
        type: "error",
        message: "Please fill all fields",
      });
      return;
    }

    // Password length
    if (password.length < 8) {
      setAlert({
        show: true,
        type: "error",
        message: "Password must be at least 8 characters long.",
      });
      return;
    }

    // Confirm password
    if (password !== confirmPassword) {
      setAlert({
        show: true,
        type: "error",
        message: "Passwords do not match",
      });
      return;
    }

    // Terms checkbox
    if (!agree) {
      setAlert({
        show: true,
        type: "error",
        message: "Please accept Terms & conditions",
      });
      return;
    }

    // Remove confirmPassword before sending to backend
    const { confirmPassword: _, ...userData } = signupData;

    await signup(userData);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-full"
      >
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Create Account
        </h2>

        <p className="mt-2 text-slate-600 font-medium">
          Join Mizaan and start learning before investing.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          {/* Full Name */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User
                size={18}
                strokeWidth={2.5}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={signupData.fullName}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 py-3.5 pl-11 pr-4 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail
                size={18}
                strokeWidth={2.5}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={signupData.email}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 py-3.5 pl-11 pr-4 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock
                size={18}
                strokeWidth={2.5}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                value={signupData.password}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 py-3.5 pl-11 pr-12 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer p-1 rounded-md"
              >
                {showPassword ? (
                  <EyeOff size={18} strokeWidth={2.5} />
                ) : (
                  <Eye size={18} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                size={18}
                strokeWidth={2.5}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="••••••••"
                value={signupData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-xl bg-slate-50 border border-slate-200 py-3.5 pl-11 pr-12 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-emerald-600 transition-colors cursor-pointer p-1 rounded-md"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} strokeWidth={2.5} />
                ) : (
                  <Eye size={18} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 cursor-pointer pt-2">
            <input
              type="checkbox"
              name="agree"
              checked={signupData.agree}
              onChange={handleChange}
              className="mt-1 w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500/20 cursor-pointer accent-emerald-600"
            />
            <span className="text-sm text-slate-600 font-medium leading-relaxed">
              I agree to the{" "}
              <span className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition-colors">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-emerald-600 font-bold hover:text-emerald-700 hover:underline transition-colors">
                Privacy Policy
              </span>.
            </span>
          </label>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-600 mt-2 py-3.5 font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300"
          >
            Create Account
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
          
        </form>
      </motion.div>
    </>
  );
}