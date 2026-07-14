import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CoverUploader from "./CoverUploader";
import ImageUploader from "./ImageUploader";
import MarkdownEditor from "./markdownEditor";
import LivePreview from "./LivePreview";
import PublishBar from "./PublishBar";
import AccessSelector from "./asccesSelector";

export default function ArticleForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");

  const [description, setDescription] = useState("");

  const [category, setCategory] = useState("Investment");

  const [memberType, setMemberType] = useState("all");

  const [coverImage, setCoverImage] = useState(null);

  const [articleImages, setArticleImages] = useState([]);

  const [content, setContent] = useState("");
const [access, setAccess] = useState("all");

  useEffect(() => {
    setSlug(
      title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, "")
        .replace(/\s+/g, "-")
    );
  }, [title]);

  const handlePublish = () => {
    console.log({
      title,
      slug,
      description,
      category,
      memberType,
      coverImage,
      articleImages,
      content,
    });
  };

  return (
    <section className="min-h-screen bg-slate-100 py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl bg-white border border-slate-200 shadow-xl p-10"
        >

          {/* Heading */}

         <div className="mt-12">
    <AccessSelector
        value={access}
        onChange={setAccess}
    />
</div>

          {/* Title */}

          <div className="space-y-2">

            <label className="font-semibold text-slate-700">

              Article Title

            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Write article title..."
              className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-emerald-500"
            />

          </div>

          {/* Slug */}

          <div className="mt-6 space-y-2">

            <label className="font-semibold text-slate-700">

              Slug

            </label>

            <input
              value={slug}
              readOnly
              className="w-full rounded-xl border border-slate-200 bg-slate-100 px-5 py-4 text-slate-500"
            />

          </div>

          {/* Description */}

          <div className="mt-6 space-y-2">

            <label className="font-semibold text-slate-700">

              Short Description

            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Short summary..."
              className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none resize-none focus:border-emerald-500"
            />

          </div>

          {/* Category */}

          <div className="mt-8">

            <label className="font-semibold text-slate-700">

              Category

            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-emerald-500"
            >
              <option>Investment</option>
              <option>PSX</option>
              <option>Mutual Funds</option>
              <option>Finance</option>
              <option>Business</option>
              <option>Economy</option>
            </select>

          </div>

          {/* Member Access */}

        
          {/* Cover */}

          <div className="mt-12">

            <CoverUploader

              coverImage={coverImage}

              setCoverImage={setCoverImage}

            />

          </div>

          {/* Gallery */}

          <div className="mt-12">

           <ImageUploader
  mainImage={coverImage}
  setMainImage={setCoverImage}
  articleImages={articleImages}
  setArticleImages={setArticleImages}
/>
          </div>

          {/* Markdown */}

          <div className="mt-12">

            <MarkdownEditor

              value={content}

              onChange={setContent}

              images={articleImages}

            />

          </div>

          {/* Preview */}

          {/* <div className="mt-14">

           <LivePreview
  title={title}
  description={description}
  coverImage={coverImage}
  markdown={content}
/>

          </div> */}

          {/* Publish */}

          <div className="mt-12">

            <PublishBar

              onPublish={handlePublish}

            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}ImageUploader.jsx