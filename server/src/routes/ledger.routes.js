import express from "express";
import { addLedger, deleteLedgerById, getAllLedgers, updateLedgerById } from "../controllers/ledger.controller.js";

const router = express.Router();

router.post('/', addLedger);
router.get('/', getAllLedgers);
router.patch('/:ledgerId', updateLedgerById);
router.delete('/:ledgerId', deleteLedgerById);
export default router;