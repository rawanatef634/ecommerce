import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: {
        type: String,    
        required: true
    },
    products: {
        type: Array,
        required: true 
    },
    totalAmount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "Order Placed"
    },
    address: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    },
    payment: {
        type: Boolean,
        required: true,
        default: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const OrderModel = mongoose.model("Order", orderSchema);
export default OrderModel;