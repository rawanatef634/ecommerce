import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js';
import auth from '../middleware/auth.js';

const cartRoutes = express.Router();

cartRoutes.post('/addToCart', auth, addToCart);
cartRoutes.get('/getCart', auth, getCart);
cartRoutes.delete('/removeFromCart', auth, removeFromCart);

export default cartRoutes;