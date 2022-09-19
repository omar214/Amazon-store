import express from 'express';
const router = express.Router();
import orderController from '../controllers/orderController.js';
import { verifyAuth, verifyAdmin } from '../../middlewares/authMiddleware.js';

router.get('/', orderController.getAllOrders);
router.get('/mine', verifyAuth, orderController.getUserOrders);
router.get('/:id', orderController.getOrderById);

router.post('/', verifyAuth, orderController.addOrder);
router.delete('/:id', verifyAuth, verifyAdmin, orderController.deleteOrder);

// not admin as i could pay & change it
router.put('/:id', verifyAuth, orderController.editOrder);

export default router;