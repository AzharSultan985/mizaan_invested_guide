import { motion } from "framer-motion";
import {
  Save,
  Send,
  Eye,
  FileText,
  Loader2,
} from "lucide-react";

export default function PublishBar({
  loading = false,
  onPreview,
  onSaveDraft,
  onPublish,
}) {
  return (
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
                Preview your article, save it as a draft, or publish it
                for your selected audience.
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="flex flex-wrap gap-3">

            {/* Preview */}

            <button
              type="button"
              onClick={onPreview}
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-emerald-500 hover:text-emerald-600"
            >
              <Eye size={18} />
              Preview
            </button>

            {/* Draft */}

            <button
              type="button"
              onClick={onSaveDraft}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-100 disabled:opacity-50"
            >
              <Save size={18} />
              Save Draft
            </button>

            {/* Publish */}

            <button
              type="button"
              onClick={onPublish}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:shadow-emerald-300/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                  Publishing...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Publish Article
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </motion.div>
  );
}