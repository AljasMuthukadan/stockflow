import express from "express";

import {
  createInventoryItem,
  getInventoryItems,
  getInventoryItemByCategory,
  getInventoryItemById,
  updateInventoryItem,
  deleteInventoryItem,
} from "../controllers/inventory.item.controller.js";

const router = express.Router();

router.get("/", getInventoryItems);

router.post("/", createInventoryItem);

router.get("/category/:category", getInventoryItemByCategory);

router.get("/:id", getInventoryItemById);

router.patch("/:id", updateInventoryItem);

router.delete("/:id", deleteInventoryItem);

export default router;