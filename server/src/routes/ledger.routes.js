import express from "express";
import { addLedger, getAllLedgers } from "../controllers/ledger.controller.js";

const router = express.Router();

router.post('/', addLedger);
router.get('/', getAllLedgers);

export default router;