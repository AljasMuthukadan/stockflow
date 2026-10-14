import express from 'express';
import { createProductionOrder, getAllProductionOrders } from '../controllers/production.order.controller.js';

const router = express.Router();

router.post('/', createProductionOrder); // post producction order data
router.get('/', getAllProductionOrders ); // gets all order data

export default router