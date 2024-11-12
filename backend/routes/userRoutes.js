import express from 'express';
import { loginUser, registerUser, adminLogin } from '../controllers/userController.js';

const userRoutes = express.Router();

userRoutes.post('/login', loginUser);
userRoutes.post('/register', registerUser);
userRoutes.post('/admin/login', adminLogin);

export default userRoutes;