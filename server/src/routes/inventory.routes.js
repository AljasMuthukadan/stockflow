import express from "express";

import {
  createInventoryItem,
  getInventoryItems,
} from "../controllers/inventory.item.controller.js";

const router = express.Router();

router.get("/", getInventoryItems);

router.post("/", createInventoryItem);

export default router;