import express from "express";
import controller from "../controllers/todos.js";

const router = express.Router();

router.get("/", controller.getAllTodos);
router.get("/:id", controller.getTodoById);
router.post("/", controller.createTodo);
router.put("/:id", controller.updateTodo);
router.delete("/:id", controller.deleteTodo);

// kiwkiw
export default router;
