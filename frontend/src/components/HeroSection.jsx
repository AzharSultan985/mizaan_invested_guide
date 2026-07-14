import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const research = [
  {
    title: "Cement sector outlook",
    subtitle: "Published today",
  },
  {
    title: "Roshan Digital Account",
    subtitle: "For overseas investors",
  },
  {
    title: "Mutual Funds vs PSX",
    subtitle: "Beginner Guide",
  },
  {
    title: "This week in numbers",
    subtitle: "Weekly Digest",
  },
];

export default function HeroSection() {
  const { UserData, isLoggedIn } = useAuth();

  return (
    <>
      {isLoggedIn ? (
        // ================= LOGGED IN VIEW =================
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white shadow-sm mt-24 mx-4 lg:mx-8 mb-12">
          {/* Light Mode Background Glows */}
          <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-300/30 blur-[100px]" />
          <div className="absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-amber-300/30 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:gap-14 lg:px-14 lg:py-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm">
                <Sparkles size={16} className="text-emerald-500" />
                Welcome Back
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Hello,{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  {UserData?.fullname || "Investor"}
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-600">
                Welcome to <span className="font-semibold text-slate-900">Mizaan Invest</span>,
                your Islamic investment companion. Explore ethical investment
                opportunities, monitor your portfolio, complete daily tasks,
                grow your earnings, and make informed financial decisions with
                confidence.
              </p>

              {/* Stat Cards */}
              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                <div className="flex flex-1 items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="rounded-xl bg-emerald-100 p-3">
                    <TrendingUp className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Investment</p>
                    <h3 className="font-bold text-slate-900">Smart Growth</h3>
                  </div>
                </div>

                <div className="flex flex-1 items-center gap-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="rounded-xl bg-amber-100 p-3">
                    <ShieldCheck className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">100%</p>
                    <h3 className="font-bold text-slate-900">Shariah Compliant</h3>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Image Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-200/50 to-amber-200/50 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <img
                  src="images/dashboardimg.jfif"
                  alt="Investment Dashboard"
                  className="w-full h-[350px] sm:h-[450px] lg:h-[520px] object-cover rounded-3xl"
                />

                {/* Light mode gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                {/* Floating Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 rounded-2xl border border-white/60 bg-white/70 p-5 sm:p-6 backdrop-blur-xl shadow-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    Build Wealth the Ethical Way
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-700">
                    Invest with confidence using transparent, Shariah-compliant
                    investment strategies designed for sustainable long-term
                    growth.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        // ================= LOGGED OUT VIEW =================
        <section className="relative z-20 flex items-center min-h-[88vh] pt-32 pb-16 px-6 lg:px-14 bg-slate-50 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-14 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 shadow-sm">
                Built by Accounting & Finance Professionals
              </span>

              <h1 className="mt-6 text-3xl sm:text-red-400xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
                Clear financial research,
                <br className="hidden sm:block" />
                for people who actually
                <br className="hidden sm:block" />
                <span className="text-emerald-600">want to understand it.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600">
                Mizaan explains PSX, mutual funds and personal finance in simple,
                practical language. No hype, no confusing terminology, and no
                investment tips without proper reasoning.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl bg-emerald-600 px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
                >
                  Start Free
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 transition-colors"
                >
                  Sample Research
                </motion.button>
              </div>

              {/* Stats */}
              <div className="mt-12 flex flex-wrap gap-8 sm:gap-12 border-t border-slate-200 pt-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">180+</h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">Research Articles</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">60+</h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">Companies Covered</p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Weekly</h3>
                  <p className="text-sm font-medium text-slate-500 mt-1">Market Insights</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="mt-8 lg:mt-0"
            >
              <div className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)]">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-5">
                  <h2 className="text-lg font-bold text-slate-900">Latest Research</h2>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Updated Today
                  </span>
                </div>

                {/* List Items */}
                <div className="divide-y divide-slate-100">
                  {research.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.15 }}
                      whileHover={{ x: 6 }}
                      className="group flex items-center justify-between px-6 py-5 transition-colors cursor-pointer hover:bg-slate-50"
                    >
                      <div>
                        <h3 className="text-base font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500 font-medium">
                          {item.subtitle}
                        </p>
                      </div>

                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                        <ArrowRight
                          size={16}
                          className="text-slate-400 transition-colors group-hover:text-emerald-600 group-hover:translate-x-0.5"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}