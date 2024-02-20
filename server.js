import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

// routes
import users from "./routes/users.js";
import posts from "./routes/posts.js";
import profiles from "./routes/profiles.js";

app.use(morgan("tiny"));
app.use(express.json());

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use("/api/profiles", profiles);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
