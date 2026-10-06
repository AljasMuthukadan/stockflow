import express from 'express';
import { createProduction } from '../controllers/production.order.controller.js';

const router = express.Router();

router.post('/', createProduction)


export default router