import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimatedBg from "./AnimatedBg";

const plans = [
  {
    name: "Free",
    price: "PKR 0",
    period: "Forever",
    description: "Perfect for getting started.",
    features: [
      "Weekly market digest",
      "Public research articles",
      "Basic investing guides",
    ],
    button: "Get Started",
    featured: false,
  },
  {
    name: "Member — Local",
    price: "PKR 1,499",
    period: "Per Month",
    description: "For active investors in Pakistan.",
    features: [
      "Full research library",
      "Portfolio tracker",
      "Private community access",
      "Weekly market outlook",
    ],
    button: "Become a Member",
    featured: true,
    badge: "Most Popular",
  },
  {
    name: "Member — Overseas",
    price: "$19",
    period: "Per Month",
    description: "Built for Overseas Pakistanis.",
    features: [
      "Everything in Local",
      "NRP-specific investment guides",
      "Priority clarity call booking",
      "Exclusive overseas content",
    ],
    button: "Join Overseas",
    featured: false,
  },
];

export default function PricingSection() {
  const navigate = useNavigate();

  const handlePlanSelect = (plan) => {
    navigate("/checkout", {
      state: {
        planName: plan.name,
        price: plan.price,
        period: plan.period,
        description: plan.description,
      },
    });
  };

  return (
    <section className="relative z-20 py-20 md:py-28 px-6 lg:px-14 bg-white overflow-hidden">
            <AnimatedBg />

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase shadow-sm">
            Pricing
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Simple plans,
            <span className="text-emerald-600 block sm:inline">
              {" "}priced in your currency.
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed">
            Choose a plan that matches your investing journey.
            Upgrade anytime.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-16 lg:items-center">

          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col h-full
                ${
                  plan.featured
                    ? "border-emerald-400 bg-white shadow-[0_20px_60px_rgba(16,185,129,0.15)] lg:scale-105 z-10"
                    : "border-slate-200 bg-white shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-emerald-200 z-0"
                }`}
            >
              
              {/* Highlight gradient for featured card */}
              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400" />
              )}

              {plan.badge && (
                <div className="absolute top-6 right-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div className="p-8 flex flex-col h-full">

                <h3 className={`text-xl font-bold ${plan.featured ? "text-emerald-700" : "text-slate-900"}`}>
                  {plan.name}
                </h3>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                    {plan.price}
                  </span>

                  <span className="text-slate-500 font-medium mb-1.5">
                    /{plan.period.replace("Per ", "")}
                  </span>
                </div>

                <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed font-medium">
                  {plan.description}
                </p>

                <button
                  onClick={() => handlePlanSelect(plan)}
                  className={`mt-8 w-full cursor-pointer rounded-xl py-3.5 font-bold transition-all duration-300 flex items-center justify-center gap-2
                  ${
                    plan.featured
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30"
                      : "border-2 border-slate-200 bg-transparent text-slate-700 hover:border-emerald-500 hover:text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  {plan.button}
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>

                <div className="mt-8 border-t border-slate-100 pt-8 flex-grow">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={14} strokeWidth={3} className="text-emerald-600" />
                        </div>
                        <span className="text-[15px] text-slate-700 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}