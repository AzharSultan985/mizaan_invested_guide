
import Article from "../Models/article.js";

export const CreateArticle = async (req, res) => {
  try {
    const {
      title,
      slug,
      description,
      category,
      access,
      content,
    } = req.body;

    if (!title || !slug || !description || !category || !content) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const exists = await Article.findOne({ slug });

    if (exists) {
      return res.status(409).json({
        success: false,
        message: "Article already exists.",
      });
    }

    // ==========================
    // Uploaded Files
    // ==========================

    const cover = req.files?.coverImage?.[0];
    const images = req.files?.articleImages || [];

    let coverImage = null;

    if (cover) {
      coverImage = {
        id: 1,
        filename: cover.filename,
        originalName: cover.originalname,
        url: `/uploads/articles/cover/${cover.filename}`,
      };
    }

    const articleImages = images.map((img, index) => ({
      id: index + 1,
      name: img.filename,
      url: `/uploads/articles/images/${img.filename}`,
    }));

    // ==========================
    // Save Article
    // ==========================

    const article = await Article.create({
      title,
      slug,
      description,
      category,
      access,
      content,
      coverImage,
      articleImages,
    });

    return res.status(201).json({
      success: true,
      message: "Article created successfully.",
      article,
    });

  } catch (error) {
    console.error("Create Article Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
