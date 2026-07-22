import article from "../Models/article.js";

export const GetAllArticles = async (req, res) => {
  try {
    const articles = await article.find()
      .sort({ createdAt: -1 })
      .select("-__v");

    return res.status(200).json({
      success: true,
      message: "Articles fetched successfully.",
      articles,
    });
  } catch (error) {
    console.log("Fetch Articles Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};