import express from 'express';
import { createProductionOrder } from '../controllers/production.order.controller.js';

const router = express.Router();

router.post('/', createProductionOrder)


export default router