  import express from "express";

  import {
    createInventoryItem,
    getInventoryItems,
    getInventoryItemByCategory,
    getInventoryItemById,
    updateInventoryItemById,
    deleteInventoryItemById,
    updateInventoryItem,
  } from "../controllers/inventory.item.controller.js";

  const router = express.Router();

  router.get("/", getInventoryItems);

  router.post("/", createInventoryItem);
  router.put("/", updateInventoryItem);
  router.get("/category/:category", getInventoryItemByCategory);

  router.get("/:id", getInventoryItemById);

  router.patch("/:id", updateInventoryItemById);

  router.delete("/:id", deleteInventoryItemById);

  export default router;