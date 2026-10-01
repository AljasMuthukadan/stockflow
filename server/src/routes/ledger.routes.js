import express from "express";
import { addLedger, getAllLedgers, updateLedgerById } from "../controllers/ledger.controller.js";

const router = express.Router();

router.post('/', addLedger);
router.get('/', getAllLedgers);
router.patch('/:ledgerId', updateLedgerById);

export default router;