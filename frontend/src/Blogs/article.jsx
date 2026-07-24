import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaBookmark,
  FaShareAlt,
} from "react-icons/fa";
import { useApp } from "../context/AppContext";

export default function ArticleDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { UserArticles, HandleFetchArticle } = useApp();
console.log(UserArticles);

  useEffect(() => {
    if (UserArticles.length === 0) {
      HandleFetchArticle();
    }
  }, []);

  const article = UserArticles.find((item) => item._id === id);

  if (UserArticles.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center text-slate-600 font-medium">
        Loading...
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center text-slate-700">
        <p className="text-xl font-semibold mb-4">Article not found</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const BackendURL = import.meta.env.VITE_BACKEND_URL;
  const coverImage = `${BackendURL}${article.coverImage.url}`;
const remainingArticles = UserArticles.filter(
  (item) => item._id !== article._id
) ||[ ];
  return (
    <section className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Header */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img
          src={coverImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/20 to-transparent" />

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 cursor-pointer left-6 md:top-8 md:left-8 z-20 h-12 w-12 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 flex items-center justify-center hover:bg-emerald-50 hover:border-emerald-200 transition shadow-sm"
        >
          <FaArrowLeft className="text-slate-800" />
        </button>

        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 max-w-5xl w-full px-6 text-center">
          {article.category && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full bg-emerald-100 border border-emerald-200 px-4 py-1.5 text-xs font-bold text-emerald-800 uppercase tracking-widest"
            >
              {article.category}
            </motion.span>
          )}

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
            {article.createdAt && (
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-emerald-500" />
                {new Date(article.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12">
          
          {/* Article Body */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm"
          >
            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-2xl prose-h2:text-xl prose-p:text-slate-700 prose-p:leading-8 prose-p:mb-6 prose-a:text-emerald-600">
     <ReactMarkdown
  components={{
    img: ({ src }) => {
      // console.log("src",src);
      
      // markdown se extension ya path hata do
      const image = article.articleImages.find((img) =>
        img.name.includes(src)
      );

      if (!image) {
        console.log("Image not found:", src);
        return (
          <div className="text-red-500">
            Image not found: {src}
          </div>
        );
      }

      return (
        <img
          src={`${BackendURL}${image.url}`}
          className="w-full rounded-3xl my-10 shadow-xl object-cover"
        />
      );
    },
  }}
>
  {article.content}
</ReactMarkdown>
            </div>
          </motion.article>

          {/* Sidebar */}
        <motion.aside
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  className="space-y-6"
>
  {/* Share */}

  {/* More Articles */}

  <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

    <div className="border-b border-slate-100 px-7 py-5">
      <h3 className="text-lg font-bold text-slate-900">
        More Articles
      </h3>

    
    </div>

  <div className="divide-y divide-slate-100">

  {remainingArticles.length > 0 ? (
    remainingArticles.map((item) => (
      <button
        key={item._id}
        onClick={() => navigate(`/user/articles/${item._id}`)}
        className="w-full text-left px-7 py-5 hover:bg-emerald-50 transition group"
      >
        <h4 className="font-semibold text-slate-800 group-hover:text-emerald-600 transition line-clamp-2">
          {item.title}
        </h4>

        <p className="mt-2 text-xs text-slate-500">
          {new Date(item.createdAt).toLocaleDateString()}
        </p>
      </button>
    ))
  ) : (
    <div className="px-7 py-10 text-center">
      <p className="text-slate-400 text-sm">
        No more articles available.
      </p>
    </div>
  )}

</div>
  </div>

 
 
</motion.aside>

        </div>
      </div>
    </section>
  );
}