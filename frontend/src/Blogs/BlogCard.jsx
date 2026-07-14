import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaClock,
  FaEye,
  FaBookOpen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const animations = [
  { opacity: 0, y: 30 },
  { opacity: 0, y: 30 },
];

export default function BlogCard({
  id,
  image,
  category,
  title,
  description,
  readTime,
  views,
  featured = false,
  index = 0,
}) {
  const animation = animations[index % animations.length];
  const navigate = useNavigate();

  if (featured) {
    return (
      <motion.div
        initial={animation}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="overflow-hidden h-64 lg:h-auto">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 duration-700"
          />
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-center">
          <span className="inline-block w-fit px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold tracking-widest uppercase border border-emerald-100">
            {category}
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 leading-tight tracking-tight">
            {title}
          </h2>

          <p className="text-slate-600 mt-6 leading-relaxed font-medium">
            {description}
          </p>

          <div className="flex gap-6 mt-8 text-slate-500 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <FaClock className="text-emerald-500" />
              {readTime}
            </span>
            <span className="flex items-center gap-2">
              <FaEye className="text-emerald-500" />
              {views}
            </span>
          </div>

          <button 
            className="mt-10 w-fit px-8 py-4 cursor-pointer rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-all flex items-center gap-3 shadow-lg shadow-emerald-600/20"  
            onClick={() => navigate(`user/articles/${id}`)}
          >
            Read Article <FaArrowRight size={14} />
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={animation}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 duration-500 flex flex-col h-full"
    >
      <div className="overflow-hidden h-60">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 duration-700"
        />
      </div>

      <div className="p-7 flex flex-col flex-grow">
        <div className="flex justify-between items-center">
          <span className="text-emerald-600 font-bold text-xs tracking-widest uppercase">
            {category}
          </span>
          <FaBookOpen className="text-slate-300" />
        </div>

        <h3 className="text-slate-900 text-xl font-extrabold mt-4 leading-snug">
          {title}
        </h3>

        <p className="text-slate-600 mt-3 leading-relaxed text-sm flex-grow">
          {description}
        </p>

        <div className="flex justify-between mt-6 text-xs text-slate-500 font-semibold">
          <span className="flex gap-2 items-center">
            <FaClock /> {readTime}
          </span>
          <span className="flex gap-2 items-center">
            <FaEye /> {views}
          </span>
        </div>

        <button 
          onClick={() => navigate(`user/articles/${id}`)} 
          className="mt-6 w-full rounded-2xl py-4 cursor-pointer bg-slate-900 text-white font-bold flex justify-center items-center gap-3 hover:bg-slate-800 transition-all"
        >
          Read More <FaArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}