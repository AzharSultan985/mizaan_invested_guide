import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  ShieldCheck,
  ArrowRight,
  Eye,
  EyeOff,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function ChangePassword() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { setAlert, ChangePassword } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, confirmPassword } = formData;

    // Empty fields
    if (!password || !confirmPassword) {
      return setAlert({
        show: true,
        type: "error",
        message: "Please fill in all fields.",
      });
    }

    // Minimum length
    if (password.length < 8) {
      return setAlert({
        show: true,
        type: "error",
        message: "Password must be at least 8 characters long.",
      });
    }

    // Password match
    if (password !== confirmPassword) {
      return setAlert({
        show: true,
        type: "error",
        message: "Passwords do not match.",
      });
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/;

    if (!passwordRegex.test(password)) {
      return setAlert({
        show: true,
        type: "error",
        message:
          "Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.",
      });
    }

    await ChangePassword(password);
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-12 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-50/60 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md sm:max-w-lg rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
      >
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 shadow-sm">
          <ShieldCheck
            size={36}
            strokeWidth={2.5}
            className="text-emerald-600"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Change Password
        </h1>

        <p className="mt-3 text-center text-slate-600 font-medium leading-relaxed">
          Create a strong password to secure your account.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          
          {/* New Password */}
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
              New Password
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
                placeholder="Enter new password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm sm:text-base text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
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

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
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
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm sm:text-base text-slate-900 font-medium placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
                required
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

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex w-full mt-2 cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300"
          >
            Update Password
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
        </form>

        {/* Requirements Box */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <p className="text-center text-sm leading-relaxed text-slate-600 font-medium">
            Your password should contain at least 8 characters,
            including uppercase, lowercase, numbers, and special
            characters.
          </p>
        </div>

      </motion.div>
    </section>
  );
}