import express from 'express';
import { CreateArticle } from '../articlesController/ArticleController.js';
import { upload } from '../articlesController/multer.js';
import { GetAllArticles } from '../articlesController/fetchUserArticles.js';


const router =express.Router();

router.post(
  "/create-article",
  upload.fields([
    {
      name: "coverImage",
      maxCount: 1,
    },
    {
      name: "articleImages",
      maxCount: 20,
    },
  ]),
  CreateArticle
);




router.get("/fetch-user-article", GetAllArticles);

export default router;
