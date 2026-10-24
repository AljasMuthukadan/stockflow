import express from 'express';
import { createProductionOrder, deleteProductionOrder, getAllProductionOrders, updateProduction } from '../controllers/production.order.controller.js';

const router = express.Router();

router.post('/', createProductionOrder); // post producction order data
router.put('/:id', updateProduction )
router.get('/', getAllProductionOrders ); // gets all order data
router.delete('/:id',deleteProductionOrder); // delete order data)

export default router