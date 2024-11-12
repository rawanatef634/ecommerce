import express from 'express';
import { allOrders, placeOrder, placeOrderRazorPay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderController.js';
import auth from '../middleware/auth.js';
import adminAuth from '../middleware/adminAuth.js';

const orderRoutes = express.Router();

orderRoutes.post('/list', adminAuth, allOrders)
orderRoutes.post('status', adminAuth, updateStatus)
orderRoutes.post('/placeOrder', auth, placeOrder);
orderRoutes.post('/placeOrderRazorPay', auth, placeOrderRazorPay);
orderRoutes.post('/placeOrderStripe', auth, placeOrderStripe);
orderRoutes.get('/userOrders', auth, userOrders);
orderRoutes.get('/allOrders', auth, allOrders);
orderRoutes.post('/updateStatus', auth, updateStatus);

export default orderRoutes;