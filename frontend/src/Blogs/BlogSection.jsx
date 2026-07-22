import { useEffect } from "react";
import AnimatedBg from "../components/AnimatedBg";
import BlogCard from "./BlogCard";
import { useApp } from "../context/AppContext";

export default function BlogSection() {
  const {
    UserArticles,
    HandleFetchArticle,
  } = useApp();

  useEffect(() => {
    HandleFetchArticle();
  }, []);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">

      <div className="absolute inset-0 z-0">
        <AnimatedBg />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-amber-50 rounded-full blur-[100px] -left-32 top-20" />
        <div className="absolute w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] right-0 bottom-0" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20">

        <div className="text-center mb-16 md:mb-20">
          <span className="text-emerald-600 font-bold tracking-[0.2em] uppercase text-xs">
            Knowledge Center
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Personalized Learning Hub
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto font-medium text-lg">
            Premium investment articles matched with your active investment plan.
          </p>
        </div>

        {UserArticles.length > 0 && (
          <>
          <BlogCard
  featured
  article={UserArticles[0]}
/>

<div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-10 md:mt-14">
  {UserArticles.slice(1).map((blog, index) => (
    <BlogCard
      key={blog._id}
      article={blog}
      index={index}
    />
  ))}
</div>
          </>
        )}

      </div>
    </section>
  );
}