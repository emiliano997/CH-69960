import multer from "multer";
import path from "path";
import __dirname from "../dirname.js";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    if (file.mimetype.split("/")[0] !== "image") {
      callback("Sólo aceptamos imagenes");
      return;
    }

    callback(null, path.resolve(__dirname, "../public/img"));
  },
  filename: function (req, file, callback) {
    const { name } = req.body;
    if (!name) {
      callback("name no puede estar vacio");
      return;
    }

    callback(null, `${name}.jpg`);
  },
});

export const uploader = multer({ storage });
