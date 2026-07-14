import { motion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";

const research = [
  {
    category: "PSX",
    title: "What's actually driving the cement sector right now",
    time: "6 min read",
    color: "bg-emerald-100 text-emerald-700 border-emerald-200",
  },
  {
    category: "NRP Guide",
    title: "Roshan Digital Account: what it is and isn't",
    time: "8 min read",
    color: "bg-blue-100 text-blue-700 border-blue-200",
  },
  {
    category: "Basics",
    title: "Mutual funds vs direct PSX investing",
    time: "5 min read",
    color: "bg-amber-100 text-amber-700 border-amber-200",
  },
];

export default function ResearchLibrary() {
  return (
    <section className="relative z-20 py-20 md:py-28 px-6 lg:px-14 bg-slate-50 overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10 transform translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50/60 rounded-full blur-3xl pointer-events-none -z-10 transform -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold tracking-wider text-emerald-700 uppercase shadow-sm">
              Research Library
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Recent breakdowns
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              Clear, unbiased research covering Pakistan's markets,
              mutual funds and investing—written in language everyone
              can understand.
            </p>
          </div>

          <button className="group flex items-center gap-2 text-sm md:text-base font-bold text-emerald-600 hover:text-emerald-700 transition-colors whitespace-nowrap">
            View all research
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </button>
        </motion.div>

        {/* Articles */}
        <div className="mt-12 md:mt-16 space-y-4 md:space-y-6">
          {research.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1], // Smooth easing
              }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_12px_40px_rgba(16,185,129,0.08)]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                
                {/* Article Content */}
                <div className="flex-1 pr-0 sm:pr-8">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${item.color}`}
                  >
                    {item.category}
                  </span>

                  <h3 className="mt-4 md:mt-5 text-xl md:text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300 leading-snug">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
                    <Clock3 size={16} className="text-slate-400" />
                    {item.time}
                  </div>
                </div>

                {/* Arrow Icon */}
                <motion.div
                  whileHover={{ x: 4, y: -4 }}
                  className="self-start sm:self-center shrink-0"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-colors duration-300">
                    <ArrowUpRight
                      className="text-slate-400 group-hover:text-white transition-colors duration-300"
                      size={24}
                      strokeWidth={2}
                    />
                  </div>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}