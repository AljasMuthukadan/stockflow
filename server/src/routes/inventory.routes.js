import express from "express";

import {
  createInventoryItem,
  getInventoryItems,
  getInventoryItemByCategory,
  getInventoryItemById,
  updateInventoryItem,
  deleteInventoryItem,
  updateItem,
  updateInventoryItemById,
} from "../controllers/inventory.item.controller.js";

const router = express.Router();

router.get("/", getInventoryItems);

router.post("/", createInventoryItem);
router.put("/", updateItem)
router.get("/category/:category", getInventoryItemByCategory);

router.get("/:id", getInventoryItemById);

router.put("/:id", updateInventoryItemById);

router.delete("/:id", deleteInventoryItem);

export default router;