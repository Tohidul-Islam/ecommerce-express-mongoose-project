import express from 'express';
import { orderControllers } from './order.controller';

const router = express.Router();

router.post('/create-order', orderControllers.createOrder);
router.get('/', orderControllers.getAllOrders);
router.get('/:email', orderControllers.getOrderByEmail);

export const OrderRoutes = router;
