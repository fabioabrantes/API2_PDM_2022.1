import multer from "multer";
import { join } from "path";

export default {
  storage: multer.diskStorage({
    destination: join(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      const fileName = `${Date.now()}-${file.originalname.trim()}`;

      callback(null, fileName); // coloca null pq nao vai dar erro. serve para criar um nome do arquivo difernte dos outros
    },
  }),
};