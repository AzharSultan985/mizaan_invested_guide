import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Target,
  Eye,
  Gem,
  Users,
  ArrowRight,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="bg-white text-slate-900">
      {/* ================= Hero ================= */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-emerald-100 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-amber-50 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 uppercase tracking-widest">
              About Mizaan Invest
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Investing With
              <span className="block text-emerald-600">
                Ethics & Innovation
              </span>
            </h1>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              Mizaan Invest is an Islamic investment platform built to help
              people invest confidently through transparent, ethical and
              Shariah-compliant opportunities while using modern technology to
              simplify wealth creation.
            </p>

            <button className="mt-10 flex items-center gap-2 rounded-xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition">
              Explore Platform
              <ArrowRight size={18} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="images/aboutimg1.jfif"
              alt="About Mizaan Invest"
              className="h-[350px] md:h-[500px] w-full rounded-[2.5rem] object-cover shadow-2xl border border-slate-100"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= Who We Are ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="images/aboutimg2.jfif"
              alt="Who We Are"
              className="h-[350px] md:h-[420px] w-full rounded-[2.5rem] object-cover shadow-xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-emerald-600 font-bold tracking-widest text-sm uppercase">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
              Building Financial Confidence
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600 text-lg">
              Our platform empowers investors with reliable market insights,
              transparent investment opportunities, portfolio tracking,
              educational resources and ethical wealth management.
            </p>
            <p className="mt-5 leading-relaxed text-slate-600 text-lg">
              We believe technology should make investing simple, secure and
              accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* ================= Mission Vision ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Foundation
            </h2>
            <p className="mt-4 text-slate-500">
              Everything we build is driven by trust and transparency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {[
              { icon: Target, title: "Mission", desc: "Empower investors with secure and ethical investment opportunities.", color: "text-emerald-600" },
              { icon: Eye, title: "Vision", desc: "Become the most trusted Islamic investment platform worldwide.", color: "text-amber-600" },
              { icon: Gem, title: "Values", desc: "Transparency, Innovation, Integrity and Customer Success.", color: "text-cyan-600" },
            ].map((item, i) => (
              <div key={i} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm hover:shadow-lg transition-shadow border-t-4 border-t-emerald-500">
                <item.icon className={item.color} size={40} />
                <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Choose ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
            Why Choose Mizaan Invest
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { icon: ShieldCheck, title: "Secure Platform", desc: "Industry standard security." },
              { icon: TrendingUp, title: "Smart Investing", desc: "Data-driven decisions." },
              { icon: Users, title: "Expert Support", desc: "Dedicated team support." },
              { icon: Gem, title: "Ethical Finance", desc: "Shariah-compliant." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm hover:border-emerald-200 transition">
                <item.icon size={38} className="text-emerald-600" />
                <h3 className="mt-5 font-bold text-lg">{item.title}</h3>
                <p className="mt-3 text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Stats ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              ["10K+", "Active Users"],
              ["100+", "Investment Plans"],
              ["99.9%", "Platform Security"],
              ["24/7", "Support"],
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50 py-10 text-center shadow-sm">
                <h2 className="text-3xl md:text-4xl font-black text-emerald-600">{item[0]}</h2>
                <p className="mt-2 text-slate-500 text-sm font-bold uppercase tracking-wider">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}