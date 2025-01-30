import express from "express";
import "dotenv/config";
import cors from "cors";
import cats from "./routes/cats.js";
import data from "./routes/data.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// routes
app.use("/cats", cats);
app.use("/data", data);

app.listen(PORT, () => {
  console.log(`Sever listening on ${PORT}`);
});
