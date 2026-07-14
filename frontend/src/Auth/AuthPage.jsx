import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const features = [
    {
      icon: BookOpen,
      title: "Research First",
      desc: "Clear research without hype or complicated financial jargon.",
    },
    {
      icon: TrendingUp,
      title: "Portfolio Tracking",
      desc: "Track your investments privately in one place.",
    },
    {
      icon: BarChart3,
      title: "Market Insights",
      desc: "Understand PSX sectors, mutual funds and macro trends.",
    },
    {
      icon: ShieldCheck,
      title: "Independent Platform",
      desc: "No brokerage. No execution. Education comes first.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 sm:px-6 py-12 lg:py-20 relative overflow-hidden">
      
      {/* Subtle Background Page Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-50/60 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl w-full grid lg:grid-cols-2 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative z-10">

        {/* ================= LEFT PANEL ================= */}

        <div className="hidden lg:flex relative overflow-hidden p-12 xl:p-16 flex-col justify-center bg-slate-50 border-r border-slate-100">

          {/* Background Card Glows */}
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-emerald-200/40 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase shadow-sm">
              Mizaan Investor
            </span>

            <h1 className="mt-8 text-4xl xl:text-5xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
              Invest with
              <br />
              confidence.
            </h1>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-md text-lg">
              Understand companies before investing.
              Research, education and portfolio tracking—
              all in one platform.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid gap-4 mt-12 relative z-10">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ x: 8 }}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Icon size={24} strokeWidth={2.5} className="text-emerald-600" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900 text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ================= RIGHT PANEL ================= */}

        <div className="flex items-center justify-center p-6 sm:p-10 md:p-14 bg-white relative z-10">

          <div className="w-full max-w-md">

            {/* Mobile Header (Only visible on small screens) */}
            <div className="lg:hidden text-center mb-8">
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold tracking-wider text-emerald-700 uppercase shadow-sm">
                Mizaan Investor
              </span>
              <h1 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome
              </h1>
            </div>

            {/* Toggle Switch */}
            <div className="relative flex rounded-xl bg-slate-100 border border-slate-200 p-1.5 mb-10 shadow-inner">

              {/* Animated Active Pill */}
              <motion.div
                layout
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                }}
                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-lg bg-emerald-600 shadow-md ${
                  isLogin ? "left-1.5" : "left-[calc(50%+3px)]"
                }`}
              />

              <button
                onClick={() => setIsLogin(true)}
                className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors duration-300 ${
                  isLogin
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => setIsLogin(false)}
                className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors duration-300 ${
                  !isLogin
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Sign Up
              </button>

            </div>

            {/* Form Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? "login" : "signup"}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {/* 
                  Make sure your <Login /> and <Signup /> components 
                  are also updated to use light mode classes!
                */}
                {isLogin ? <Login /> : <Signup />}
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

    </div>
  );
}