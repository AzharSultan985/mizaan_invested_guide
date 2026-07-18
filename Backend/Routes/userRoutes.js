import express from 'express';
import { CreateArticle } from '../articlesController/ArticleController.js';
import { upload } from '../articlesController/multer.js';


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


export default router;
