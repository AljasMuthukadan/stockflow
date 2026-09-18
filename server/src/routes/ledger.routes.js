import express from "express";
import { addLedger } from "../controllers/ledger.controller.js";

const router = express.Router();

router.post('/', addLedger);

export default router;