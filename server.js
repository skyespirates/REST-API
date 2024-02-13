import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
