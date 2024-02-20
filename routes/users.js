import express from "express";
import controller from "../controllers/users.js";

const router = express.Router();

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);
router.put("/:userId/posts/:postId", controller.updatePost);

export default router;
