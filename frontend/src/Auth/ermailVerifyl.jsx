import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function OtpVerification() {
  const { verifyOTP, ResendOTP } = useAuth();
  const location = useLocation();

  const userEmail = location.state?.email || "";
  // Single state
  const [otp, setOtp] = useState("");

  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const otpArray = otp.split("");
    otpArray[index] = value;
    const newOtp = otpArray.join("").slice(0, 6);

    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const otpArray = otp.split("");
        otpArray[index] = "";
        setOtp(otpArray.join(""));
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyOTP({ otp });
  };

  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-50/60 blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative z-10 w-full max-w-lg rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]"
      >
        {/* Icon */}
        <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 shadow-sm">
          <ShieldCheck size={36} strokeWidth={2.5} className="text-emerald-600" />
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Verify Your Email
        </h1>

        <p className="mt-3 text-center text-slate-600 font-medium leading-relaxed">
          We've sent a verification code to
        </p>

        <div className="mt-2 flex items-center justify-center gap-2 text-emerald-600 font-bold">
          <Mail size={18} strokeWidth={2.5} />
          {userEmail || "your email address"}
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* OTP Inputs */}
          <div className="mt-10 flex justify-center gap-2 sm:gap-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={otp[index] || ""}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="h-12 w-10 sm:h-16 sm:w-14 rounded-xl border border-slate-200 bg-slate-50 text-center text-xl sm:text-2xl font-bold text-slate-900 outline-none transition-all duration-300 focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 shadow-sm"
              />
            ))}
          </div>

          {/* Verify Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-10 flex w-full items-center cursor-pointer justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 font-bold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all duration-300"
          >
            Verify Email
            <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button>

          {/* Resend Option */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 font-medium text-sm">
              Didn't receive the code?
            </p>

            <button
              onClick={() => userEmail && ResendOTP(userEmail)}
              type="button"
              className="mt-2 font-bold cursor-pointer text-emerald-600 transition-colors hover:text-emerald-700 hover:underline"
            >
              Resend OTP
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}