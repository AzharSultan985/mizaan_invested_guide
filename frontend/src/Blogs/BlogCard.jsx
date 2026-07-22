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
  article,
  featured = false,
  index = 0,
}) {
  const {
  _id,
  coverImage,
  articleImages,
  category,
  title,
  description,
  content,
  createdAt,
  views,
} = article;
  const navigate = useNavigate();

  const animation = animations[index % animations.length];

  const imageUrl = coverImage?.url
    ? `${import.meta.env.VITE_BACKEND_URL}${coverImage.url}`
    : "/placeholder.jpg";

  if (featured) {
    return (
      <motion.div
        initial={animation}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] lg:grid-cols-2"
      >
        <div className="h-64 overflow-hidden lg:h-auto">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <span className="inline-block w-fit rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
            {category}
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>

          <p className="mt-6 font-medium leading-relaxed text-slate-600">
            {description}
          </p>

          <div className="mt-8 flex gap-6 text-sm font-semibold text-slate-500">
            {/* <spn className="flex items-center gap-2"> */}
              {/* <FaClock className="text-emerald-500" />
              {raeadTime}
            </span> */}

            <span className="flex items-center gap-2">
              <FaEye className="text-emerald-500" />
              {views}
            </span>
          </div>

          <button
            onClick={() => navigate(`/user/articles/${_id}`)}
            className="mt-10 flex w-fit cursor-pointer items-center gap-3 rounded-2xl bg-emerald-600 px-8 py-4 font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
          >
            Read Article
            <FaArrowRight size={14} />
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
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm duration-500 hover:border-emerald-100 hover:shadow-xl"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-grow flex-col p-7">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
            {category}
          </span>

          <FaBookOpen className="text-slate-300" />
        </div>

        <h3 className="mt-4 text-xl font-extrabold leading-snug text-slate-900">
          {title}
        </h3>

        <p className="mt-3 flex-grow text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex justify-between text-xs font-semibold text-slate-500">
          {/* <span className="flex items-center gap-2">
            <FaClock />
            {readTime}
          </span> */}

          <span className="flex items-center gap-2">
            <FaEye />
            {views}
          </span>
        </div>

      <button
   onClick={() => navigate(`/user/articles/${_id}`)}
            className="mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-slate-900 py-4 font-bold text-white transition hover:bg-slate-800"

>
          Read More
          <FaArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}