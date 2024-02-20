import express from "express";
import controller from "../controllers/posts.js";

const router = express.Router();

router.get("/", controller.getPosts);
router.get("/:id", controller.getPost);
router.post("/", controller.createPost);
router.put("/:id", controller.updatePost);
router.delete("/:id", controller.deletePost);
router.put("/:userId/posts/:postId", controller.updatePost);

export default router;
