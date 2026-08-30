import express from "express";
import { createIventoryItem } from "../controllers/inventory.item.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Inventory data fetched",
    success: true,
  });
});
router.post('/create', createIventoryItem )

export default router;
