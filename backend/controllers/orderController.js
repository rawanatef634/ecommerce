import OrderModel from '../models/orderModel.js';
import { userModel} from '../models/userModel.js';
// placing orders using COD methods
const placeOrder = async (req, res) => {
    try {
        const { userId , products, totalAmount, address } = req.body;
        const orderData = {
            userId,
            products,
            totalAmount,
            address,
            status: "Order Placed",
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        }
        const order = new OrderModel(orderData);
        await order.save();
        await userModel.findByIdAndUpdate(userId, { $push: { orders: order._id } });
        res.json({success: true, message: "order placed successfully"})
    }
    catch (err) {
        res.json({ success: false, message: err.message })
    }
}

const placeOrderStripe = async (req, res) => {
    try {}
    catch (err) {}    
}   

const placeOrderRazorPay = async (req, res) => {
    try {}
    catch (err) {}    
}

const allOrders = async (req, res) => {
    try {}
    catch (err) {}    
}

const userOrders = async (req, res) => {
    try {}    
    catch (err) {}    
}

const updateStatus = async (req, res) => {
    try {}    
    catch (err) {}
}
module.exports = { placeOrder, placeOrderStripe, placeOrderRazorPay, userOrders, updateStatus, allOrders };