import { useLocation } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ArticlePreview() {

    const { state } = useLocation();

    const article = state?.article;

    if (!article){
        return (
            <div className="p-20 text-center">
                No Preview Data
            </div>
        );
    }
const imageMap = {};

(article.articleImages || []).forEach((img) => {
  imageMap[img.name] = img.preview;
});

console.log(article.articleImages);
console.log(article.content);
    return (

        <section className="bg-slate-50 min-h-screen">

            {/* Cover */}

            {article.coverImage && (

                <img
                    src={article.coverImage.preview}
                    className="w-full h-[420px] object-cover"
                />

            )}

            <div className="max-w-5xl mx-auto py-16 px-6">

                <span className="rounded-full bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-semibold">

                    {article.category}

                </span>

                <h1 className="mt-6 text-5xl font-black">

                    {article.title}

                </h1>

                <p className="mt-6 text-xl text-slate-500">

                    {article.description}

                </p>

                <article className="prose prose-lg max-w-none mt-14">

      <ReactMarkdown
  remarkPlugins={[remarkGfm]}
  components={{
    img({ src, alt }) {
      return (
        <img
          src={imageMap[src] || src}
          alt={alt}
          className="my-8 w-full rounded-2xl shadow-lg"
        />
      );
    },
  }}
>
  {article.content}
</ReactMarkdown>
                </article>

            </div>

        </section>

    );

}