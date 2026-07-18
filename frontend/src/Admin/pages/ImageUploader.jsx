import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  ImagePlus,
  Upload,
  Trash2,
  Copy,
  Star,
} from "lucide-react";

export default function ImageUploader({
  mainImage,
  setMainImage,
  articleImages,
  setArticleImages,
  onInsertImage,
}) {
  const mainRef = useRef(null);
  const galleryRef = useRef(null);
const images = Array.isArray(articleImages)
  ? articleImages
  : [];
  const handleMainImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const image = {
      id: Date.now(),
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    };

    setMainImage(image);
  };

  const handleGalleryImages = (e) => {
    const files = Array.from(e.target.files);

    const images = files?.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setArticleImages((prev) => [...prev, ...images]);
  };

  const removeImage = (id) => {
    setArticleImages((prev) => prev.filter((img) => img.id !== id));
  };

  const copyMarkdown = (image) => {
    const markdown = `![${image.name}](IMAGE_${image.id})`;

    navigator.clipboard.writeText(markdown);

    if (onInsertImage) {
      onInsertImage(markdown);
    }
  };

  return (
    <div className="space-y-10">

      {/* Main Image */}

    
      {/* Gallery */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">

          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Article Images
            </h3>

            <p className="text-sm text-slate-500">
              Upload images that can be inserted anywhere in Markdown.
            </p>
          </div>

          <button
            type="button"
            onClick={() => galleryRef.current.click()}
            className="rounded-xl bg-emerald-600 px-5 py-3 text-white font-medium hover:bg-emerald-700 transition"
          >
            Upload Images
          </button>

          <input
            hidden
            multiple
            ref={galleryRef}
            type="file"
            accept="image/*"
            onChange={handleGalleryImages}
          />

        </div>

      {(images || []).length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-300 p-14 text-center text-slate-500">
            No article images uploaded.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

            {images?.map((image) => (

              <motion.div
                key={image.id}
                whileHover={{ y: -6 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >

                <img
                  src={image.preview}
                  alt=""
                  className="h-48 w-full object-cover"
                />

                <div className="space-y-4 p-4">

                  <h4 className="truncate font-semibold text-slate-800">
                    {image.name}
                  </h4>

                  <div className="rounded-xl bg-slate-100 p-3 text-xs font-mono break-all text-slate-600">
                    IMAGE_{image.id}
                  </div>

                  <div className="grid grid-cols-2 gap-3">

                    <button
                      type="button"
                      onClick={() => copyMarkdown(image)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition"
                    >
                      <Copy size={15} />
                      Insert
                    </button>

                    <button
                      type="button"
                      onClick={() => removeImage(image.id)}
                      className="flex items-center justify-center gap-2 rounded-xl border border-red-300 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition"
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}