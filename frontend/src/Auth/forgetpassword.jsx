import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { ForgetPassword } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    ForgetPassword(email);
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-50/60 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
      >
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 shadow-sm">
          <ShieldAlert
            size={36}
            strokeWidth={2.5}
            className="text-emerald-600"
          />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Forgot Password?
        </h1>

        <p className="mt-3 text-center text-slate-600 font-medium leading-relaxed">
          Enter your registered email address and we'll send you
          a password reset code.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">
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
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-slate-900 font-medium placeholder-slate-400 outline-none transition-all duration-300 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex w-full mt-2 cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300"
          >
            Send Reset Code
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>
        </form>

        {/* Footer Info Box */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
          <p className="text-center text-sm leading-relaxed text-slate-600 font-medium">
            We'll email you a secure verification code to reset
            your password. The code will expire after a short
            period for your security.
          </p>
        </div>
      </motion.div>
    </section>
  );
}