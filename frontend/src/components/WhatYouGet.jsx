import { motion } from "framer-motion";
import {
  BookOpen,
  Globe2,
  MessagesSquare,
  PieChart,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Plain-language research",
    description:
      "PSX sectors, mutual funds and macro trends explained in simple language without hype or unnecessary jargon.",
  },
  {
    icon: Globe2,
    title: "Built for Overseas Pakistanis",
    description:
      "Dedicated guides covering Roshan Digital Accounts, remittances and investing in Pakistan from abroad.",
  },
  {
    icon: MessagesSquare,
    title: "1-on-1 Clarity Calls",
    description:
      "Discuss your own financial situation directly. Educational conversations with no sales pressure.",
  },
  {
    icon: PieChart,
    title: "Private Portfolio Tracking",
    description:
      "Keep track of your investments manually in one secure place without connecting your brokerage account.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Smooth easing
    },
  },
};

export default function WhatYouGet() {
  return (
    <section className="relative py-20 md:py-28 px-6 lg:px-14 z-20 bg-white overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase shadow-sm">
            What You Get
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            One platform built around
            <span className="text-emerald-600 block sm:inline">
              {" "}clarity, not hype.
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl">
            Everything inside Mizaan is designed to help you make informed
            investment decisions through research, education and practical
            financial tools.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-12 md:mt-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                variants={item}
                whileHover={{ y: -6 }}
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)] cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  {/* Icon Container */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-300">
                    <Icon
                      className="text-emerald-600 group-hover:text-white transition-colors duration-300"
                      size={24}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors duration-300">
                    <ArrowRight
                      size={16}
                      className="text-slate-400 transition-transform duration-300 group-hover:text-emerald-600 group-hover:translate-x-0.5"
                    />
                  </div>
                </div>

                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}