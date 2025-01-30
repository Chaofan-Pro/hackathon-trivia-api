import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// resolve path for data
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const catsFilePath = path.join(__dirname, "../data/cats.json");

const router = express.Router();

router.use(express.json());

function readCats() {
  const cats = fs.readFileSync(catsFilePath, "utf8");
  return JSON.parse(cats);
}

router.get("/", (req, res) => {
  const cats = readCats();
  res.json(cats);
});

export default router;
