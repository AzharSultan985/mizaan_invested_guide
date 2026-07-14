import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  Eye,
  Calendar,
  User,
  Clock,
} from "lucide-react";

export default function LivePreview({
  title,
  content,
  coverImage,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-7 py-5">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100">
          <Eye
            size={22}
            className="text-emerald-600"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Live Preview
          </h2>

          <p className="text-sm text-slate-500">
            This is how your article will appear to users.
          </p>
        </div>

      </div>

      {/* Cover */}

      {coverImage ? (
        <img
          src={coverImage.preview}
          alt=""
          className="h-[420px] w-full object-cover"
        />
      ) : (
        <div className="flex h-[320px] items-center justify-center bg-gradient-to-r from-slate-100 to-slate-200">

          <div className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow">

              <Eye
                size={34}
                className="text-slate-400"
              />

            </div>

            <h3 className="mt-5 text-lg font-semibold text-slate-700">
              Cover Image Preview
            </h3>

            <p className="mt-2 text-slate-500">
              Upload a featured image.
            </p>

          </div>

        </div>
      )}

      {/* Article */}

      <div className="mx-auto max-w-5xl px-8 py-12">

        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          Investment
        </span>

        <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900">

          {title || "Article Title"}

        </h1>

        <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">

          <span className="flex items-center gap-2">

            <User size={16} />

            Mizaan Invest

          </span>

          <span className="flex items-center gap-2">

            <Calendar size={16} />

            Today

          </span>

          <span className="flex items-center gap-2">

            <Clock size={16} />

            5 min read

          </span>

        </div>

        <div className="mt-12 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-p:leading-8 prose-img:rounded-2xl prose-img:shadow-xl prose-a:text-emerald-600 prose-strong:text-slate-900 prose-code:text-pink-600 prose-pre:bg-slate-900 prose-blockquote:border-emerald-500 prose-li:marker:text-emerald-600">

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content ||
              `# Start Writing

Your article preview will appear here.

## Markdown Supported

- Heading
- Lists
- Tables
- Images
- Bold
- Italic
- Links
- Code Blocks

**Happy Writing 🚀**
`}
          </ReactMarkdown>

        </div>

      </div>

    </div>
  );
}