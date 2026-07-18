import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CoverUploader from "./CoverUploader";
import ImageUploader from "./ImageUploader";
import MarkdownEditor from "./markdownEditor";
import LivePreview from "./LivePreview";
import AccessSelector from "./asccesSelector";
import {
  Save,
  Send,
  Eye,
  FileText,
  Loader2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/context";
export default function ArticleForm() {
 const [formData, setFormData] = useState({
  title: "",
  slug: "",
  description: "",
  category: "Investment",
  access: "all",
  coverImage: null,
  articleImages: [],
  content: "",
});

  const { HandleArticle } = useApp();

const navigate=useNavigate()
const [showPublishModal, setShowPublishModal] = useState(false);
const [loading, setLoading] = useState(false);
const updateField = (field, value) => {
  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

useEffect(() => {
  const slug = formData.title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");

  updateField("slug", slug);
}, [formData.title]);




const handlePublish = async (e) => {
  try {
      e.preventDefault(); 
    setLoading(true);
// console.log(formData);

    await HandleArticle(formData);

    setShowPublishModal(false);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

const handlePerview = () => {
  console.log(formData);

  navigate("/admin/articles/preview", {
    state: {
      article: formData,
    },
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
  value={formData.access}
  onChange={(value) =>
    setFormData((prev) => ({
      ...prev,
      access: value,
    }))
  }
/>
</div>

          {/* Title */}

          <div className="space-y-2">

            <label className="font-semibold text-slate-700">

              Article Title

            </label>

            <input
              type="text"
              value={formData.title}

onChange={(e) => updateField("title", e.target.value)}
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
value={formData.slug}              readOnly
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
              value={formData.description}

onChange={(e) =>
  updateField("description", e.target.value)
}
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
            value={formData.category}

onChange={(e) =>
  updateField("category", e.target.value)
}
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
  coverImage={formData.coverImage}
  setCoverImage={(image) =>
    setFormData((prev) => ({
      ...prev,
      coverImage: image,
    }))
  }
/>
          </div>

          {/* Gallery */}

          <div className="mt-12">
<ImageUploader
  articleImages={formData.articleImages}
  setArticleImages={(images) =>
    setFormData((prev) => ({
      ...prev,
      articleImages:
        typeof images === "function"
          ? images(prev.articleImages)
          : images,
    }))
  }
/>

          </div>

          {/* Markdown */}

          <div className="mt-12">
<MarkdownEditor
  value={formData.content}
  onChange={(value) =>
    setFormData((prev) => ({
      ...prev,
      content: value || "",
    }))
  }
  images={formData.articleImages}
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

        <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="sticky bottom-5 z-50"
    >
      <div className="rounded-3xl border border-slate-200 bg-white/95 backdrop-blur-xl shadow-2xl">

        <div className="flex flex-col gap-5 p-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Left */}

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100">
              <FileText
                size={26}
                className="text-emerald-600"
              />
            </div>

            <div>

              <h3 className="text-xl font-bold text-slate-900">
                Ready to Publish?
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Preview your article or publish it
                for your selected audience.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-wrap gap-3">

            {/* Preview */}

            <button
            onClick={handlePerview}
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
            >
              <Eye size={18} />
              Preview
            </button>

            {/* Draft */}

            
            {/* Publish */}

      <button
  type="button"
  onClick={() => setShowPublishModal(true)}
  className="flex items-center gap-2 rounded-xl cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 font-semibold text-white shadow-lg"
>
  <Send size={18} />
  Publish Article
</button>

          </div>

        </div>

      </div>
    </motion.div>
        </motion.div>

      </div>
 {showPublishModal && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
    >

      <h2 className="text-2xl font-bold text-slate-900">
        Publish Article
      </h2>

      <p className="mt-3 text-slate-600">
        Are you sure you want to publish this article?
        This article will become available according to the selected access level.
      </p>

      <div className="mt-8 flex justify-end gap-3">

        <button
          onClick={() => setShowPublishModal(false)}
          disabled={loading}
          className="rounded-xl border border-slate-300 px-5 py-3 font-semibold hover:bg-slate-100"
        >
          Cancel
        </button>

        <button
          onClick={handlePublish}
          disabled={loading}
          className="flex items-center gap-2 cursor-pointer rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Publishing...
            </>
          ) : (
            <>
              <Send size={18} />
              Confirm Publish
            </>
          )}
        </button>

      </div>

    </motion.div>

  </div>
)}
    </section>
    
  );
}ImageUploader.jsx