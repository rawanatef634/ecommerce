
// add products to cart 

const { default: UserModel } = require("../models/userModel");

const addToCart = async (req, res) => { 
    try {
        const { userId, productId, size } = req.body;
        const userData = await UserModel.findById(userId)
        let cartData = await userData.cartData;
        if (cartData[productId]) {
            if (cartData[productId][size]) {
                cartData[productId][size]++;
            } else {
                cartData[productId][size] = 1;
            }
        } else {
            cartData[productId] = {};
            cartData[productId][size] = 1;
        }
        const updatedUser = await UserModel.findByIdAndUpdate(userId, { cartData }, { new: true });
        if (updatedUser) {
            res.status(200).json({ success: true, cartData: updatedUser.cartData });
        }
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

// update user cart 

const updateCart = async (req, res) => {
    try {
        const { userId, productId, quantity, size } = req.body;
        const userData = await UserModel.findById(userId)
        let cartData = await userData.cartData;
        cartData[productId][size] = quantity;
        const updatedUser = await UserModel.findByIdAndUpdate(userId, { cartData }, { new: true });
        if (updatedUser) {
            res.status(200).json({ success: true, cartData: updatedUser.cartData });
        } 
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
}

// get user cart 

const getCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await UserModel.findById(userId)
        let cartData = await userData.cartData
        res.status(200).json({ success: true, cartData: cartData });
    }
    catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }    
}


module.exports = { addToCart, updateCart, getCart };