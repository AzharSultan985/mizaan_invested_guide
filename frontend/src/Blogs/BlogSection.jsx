import AnimatedBg from "../components/AnimatedBg.jsx";
import BlogCard from "./BlogCard";
import { blogData } from "./blogData.jsx";

export default function BlogSection() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <AnimatedBg />
      </div>

      {/* Shapes layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-amber-50 rounded-full blur-[100px] -left-32 top-20" />
        <div className="absolute w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] right-0 bottom-0" />
      </div>

      {/* Content layer */}
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

        <div className="w-full">
          <BlogCard featured {...blogData[0]} />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-10 md:mt-14">
          {blogData.slice(1).map((blog, index) => (
            <BlogCard key={blog.id} index={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}