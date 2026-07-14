import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaClock,
  FaEye,
  FaCalendarAlt,
  FaUser,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "How to Build Long-Term Wealth Through Smart Investing",
    category: "Investment",
    author: "Mizaan Invest",
    date: "July 10, 2026",
    readTime: "8 min read",
    views: "12.4k",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=1800&q=80",
    content: `Investing is one of the most effective ways to build wealth over time. Instead of relying only on savings, investing allows your money to grow through compounding returns.

The first rule is consistency. Successful investors don't try to predict the market every day—they invest regularly and stay invested.

Diversification is another important principle. By spreading investments across different sectors, industries, and asset classes, investors reduce unnecessary risk.

Market volatility is normal. Rather than reacting emotionally during downturns, experienced investors focus on long-term fundamentals.

Finally, always continue learning. Financial markets evolve, and informed investors make better decisions. Reading research reports, studying businesses, and understanding economic trends can significantly improve investment outcomes.

At Mizaan Invest, our goal is to simplify investing through professional research, education, and ethical financial guidance for everyone.`,
  },
];

export default function ArticleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-800 text-2xl font-bold">
        Article Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 md:top-8 md:left-8 z-20 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-200 transition"
        >
          <FaArrowLeft className="text-slate-800" />
        </button>

        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 max-w-5xl w-full px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full bg-emerald-100 border border-emerald-200 px-4 py-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest"
          >
            {article.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900"
          >
            {article.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-wrap justify-center gap-6 mt-6 text-slate-600 text-sm font-medium"
          >
            <span className="flex items-center gap-2"><FaUser className="text-emerald-500" /> {article.author}</span>
            <span className="flex items-center gap-2"><FaCalendarAlt className="text-emerald-500" /> {article.date}</span>
            <span className="flex items-center gap-2"><FaClock className="text-emerald-500" /> {article.readTime}</span>
            <span className="flex items-center gap-2"><FaEye className="text-emerald-500" /> {article.views}</span>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm"
          >
            <div className="prose prose-slate prose-lg max-w-none text-slate-700">
              {article.content
                .trim()
                .split("\n")
                .filter((p) => p.trim() !== "")
                .map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="leading-8 mb-6"
                  >
                    {paragraph}
                  </motion.p>
                ))}
            </div>

            <div className="mt-12 rounded-2xl bg-emerald-50 border border-emerald-100 p-8">
              <h3 className="text-xl font-bold text-slate-900">Key Takeaway</h3>
              <p className="mt-4 text-slate-700 leading-7 font-medium">
                Long-term investing combined with disciplined financial decisions, diversification, and continuous learning creates sustainable wealth over time.
              </p>
            </div>
          </motion.article>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">Quick Actions</h3>
              <button className="mt-6 w-full rounded-xl bg-emerald-600 py-3 text-white font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition">
                <FaBookmark /> Save Article
              </button>
              <button className="mt-4 w-full rounded-xl border border-slate-200 py-3 text-slate-700 font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition">
                <FaShareAlt /> Share
              </button>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Continue Learning</h3>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                Explore more professional investment research, market insights, and educational resources from Mizaan Invest.
              </p>
              <button
                onClick={() => navigate("/dashboard/articles")}
                className="mt-6 w-full rounded-xl bg-slate-900 py-3 font-bold text-white hover:bg-slate-800 transition"
              >
                View All Articles
              </button>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}