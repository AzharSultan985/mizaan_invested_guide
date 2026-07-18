import mongoose from "mongoose";

const articleImageSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    url: {
      type: String,
      required: true,
    },

    publicId: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      default: "Investment",
    },

    access: {
      type: String,
      enum: ["free", "local", "overseas", "all"],
      default: "all",
    },

    content: {
      type: String,
      required: true,
    },

    coverImage: {
      url: {
        type: String,
        default: "",
      },

      publicId: {
        type: String,
        default: "",
      },
    },

    articleImages: [articleImageSchema],

    published: {
      type: Boolean,
      default: true,
    },

    views: {
      type: Number,
      default: 0,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Article", articleSchema);