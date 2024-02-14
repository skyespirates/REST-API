import express from "express";
const router = express.Router();

import {
  addProduct,
  getProductList,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

router.get("/", getProductList);
router.post("/", addProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
