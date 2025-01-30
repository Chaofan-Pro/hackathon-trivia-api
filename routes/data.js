import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// resolve path for data
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, "../data/data.json");

const router = express.Router();

router.use(express.json());

function readData() {
  const data = fs.readFileSync(dataFilePath, "utf8");
  return JSON.parse(data);
}

router.get("/", (req, res) => {
  const data = readData();
  res.json(data);
});

export default router;
