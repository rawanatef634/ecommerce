import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
// app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// middleware
app.use(cors());
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);


app.listen(port, () => console.log(`Server running on port ${port}`));