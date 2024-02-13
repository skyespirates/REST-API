import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

// routes
import todosRoute from "./routes/todos.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

const app = express();

app.use(morgan("tiny"));
app.use(express.json());

// multiple routes
app.use("/todos", todosRoute);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Skyes API</h1>");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
