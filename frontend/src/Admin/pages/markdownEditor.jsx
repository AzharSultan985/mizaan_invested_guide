import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { Image, Type, BookOpen } from "lucide-react";

export default function MarkdownEditor({
  value,
  onChange,
  images = [],
}) {
  const insertImage = (imageName) => {
    const markdown = `\n\n![Image](${imageName})\n\n`;

    onChange((value || "") + markdown);
  };

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h2 className="text-2xl font-bold text-slate-900">
          Article Content
        </h2>

        <p className="mt-2 text-slate-500">
          Write your article using Markdown. You can use headings, bold,
          italic, tables, code blocks, links, lists and insert uploaded
          images.
        </p>

      </div>

      <div className="grid xl:grid-cols-[1fr_300px] gap-8">

        {/* Editor */}

        <div className="rounded-3xl border border-slate-200 bg-white shadow-lg overflow-hidden">

          <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-200 bg-slate-50">

            <Type
              className="text-emerald-600"
              size={22}
            />

            <div>

              <h3 className="font-bold text-slate-800">
                Markdown Editor
              </h3>

              <p className="text-sm text-slate-500">
                Supports Markdown formatting
              </p>

            </div>

          </div>

          <div data-color-mode="light">

            <MDEditor
              value={value}
              onChange={onChange}
              height={700}
              preview="edit"
              visibleDragbar={false}
            />

          </div>

        </div>

        {/* Sidebar */}

        <div className="space-y-6">

          {/* Markdown Help */}

          <div className="rounded-3xl border border-slate-200 bg-white shadow-lg">

            <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-200">

              <BookOpen
                className="text-emerald-600"
                size={20}
              />

              <h3 className="font-bold text-slate-900">
                Markdown Guide
              </h3>

            </div>

            <div className="p-6 space-y-3 text-sm text-slate-600">

              <p><strong>#</strong> Heading 1</p>

              <p><strong>##</strong> Heading 2</p>

              <p><strong>###</strong> Heading 3</p>

              <p><strong>**Bold**</strong></p>

              <p><strong>*Italic*</strong></p>

              <p><strong>-</strong> Bullet List</p>

              <p><strong>1.</strong> Numbered List</p>

          <p>
  <strong>&gt; Quote</strong>
</p>

              <p><strong>```</strong> Code Block</p>

              <p><strong>|</strong> Tables</p>

              <p><strong>[Text](URL)</strong></p>

            </div>

          </div>

          {/* Uploaded Images */}

          <div className="rounded-3xl border border-slate-200 bg-white shadow-lg">

            <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-200">

              <Image
                className="text-emerald-600"
                size={20}
              />

              <h3 className="font-bold text-slate-900">
                Uploaded Images
              </h3>

            </div>

            <div className="p-5">

              {images.length === 0 && (

                <div className="rounded-xl bg-slate-50 p-5 text-center text-sm text-slate-500">

                  Upload images first.

                </div>

              )}

              <div className="space-y-3">

                {images.map((img, index) => {

                  const imageName =
                    img.name || img.filename || img;

                  return (

                    <button
                      key={index}
                      type="button"
                      onClick={() => insertImage(imageName)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-emerald-500 hover:bg-emerald-50"
                    >

                      <div className="font-semibold text-slate-800">

                        {imageName}

                      </div>

                      <div className="text-xs text-slate-500 mt-1">

                        Click to insert into article

                      </div>

                    </button>

                  );

                })}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}