// components/admin/articles/CoverUploader.jsx

import React from "react";
import { UploadCloud, ImagePlus, Trash2 } from "lucide-react";

export default function CoverUploader({
  coverImage,
  setCoverImage,
}) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setCoverImage({
      file,
      preview,
    });
  };

  const removeImage = () => {
    if (coverImage?.preview) {
      URL.revokeObjectURL(coverImage.preview);
    }

    setCoverImage(null);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-200 px-6 py-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Cover Image
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Upload the featured image that appears on the article card and
          article header.
        </p>
      </div>

      <div className="p-6">

        {!coverImage ? (
          <label className="group flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 transition hover:border-emerald-500 hover:bg-emerald-50">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
              <UploadCloud
                size={30}
                className="text-emerald-600"
              />
            </div>

            <h4 className="mt-5 text-lg font-semibold text-slate-800">
              Upload Cover Image
            </h4>

            <p className="mt-2 text-center text-sm text-slate-500 max-w-sm">
              JPG, PNG or WEBP
              <br />
              Recommended size:
              <span className="font-semibold">
                {" "}
                1920 × 1080
              </span>
            </p>

            <div className="mt-6 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-emerald-700">
              Choose Image
            </div>

            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleChange}
            />
          </label>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

            <div className="relative">

              <img
                src={coverImage.preview}
                alt="Cover Preview"
                className="h-[350px] w-full object-cover"
              />

              <button
                onClick={removeImage}
                type="button"
                className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition hover:bg-red-700"
              >
                <Trash2 size={18} />
              </button>

            </div>

            <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">

              <div className="min-w-0">
                <h4 className="truncate font-semibold text-slate-900">
                  {coverImage.file.name}
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  {(coverImage.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>

              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600">

                <ImagePlus size={18} />

                Replace Image

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleChange}
                />

              </label>

            </div>

          </div>
        )}

      </div>

    </div>
  );
}