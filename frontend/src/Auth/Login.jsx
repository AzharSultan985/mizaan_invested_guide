import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { Login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Login(loginData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="w-full"
    >
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
        Welcome Back
      </h2>

      <p className="mt-2 text-slate-600 font-medium">
        Login to continue your investment journey.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        
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
              value={loginData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-xl bg-slate-50 border border-slate-200 py-3.5 pl-11 pr-4 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              required
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
              value={loginData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-xl bg-slate-50 border border-slate-200 py-3.5 pl-11 pr-12 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              required
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

        {/* Forgot Password */}
        <div className="flex justify-end pt-1">
          <button
            onClick={() => navigate('forget-password')}
            type="button"
            className="text-sm font-bold cursor-pointer text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -1 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-600 mt-2 py-3.5 font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300"
        >
          Login
          <ArrowRight size={18} strokeWidth={2.5} />
        </motion.button>

      </form>
    </motion.div>
  );
}