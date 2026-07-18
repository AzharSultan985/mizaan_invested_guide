
import multer from "multer";
import fs from "fs";
import path from "path";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    let folder = "uploads/articles/images";

    if (file.fieldname === "coverImage") {
      folder = "uploads/articles/cover";
    }

    fs.mkdirSync(folder, { recursive: true });

    cb(null, folder);
  },

  filename(req, file, cb) {
    const unique =
      Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, unique + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage,
});
