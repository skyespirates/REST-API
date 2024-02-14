import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

// middleware
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

import productRoute from "./routes/product.js";
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
