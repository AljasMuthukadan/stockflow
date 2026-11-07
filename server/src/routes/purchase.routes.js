import express from 'express'
import { createPurchaseOrder, getAllPurchaseOrders } from '../controllers/purchase.order.controller.js';

const router = express.Router()

router.post('/', createPurchaseOrder)

router.get('/', getAllPurchaseOrders)

export default router;