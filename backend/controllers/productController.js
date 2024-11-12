import {v2 as cloudinary} from 'cloudinary'
import ProductModel from '../models/productModel.js';
// product routes

const listProducts = async (req, res) => {
    try {
        const products = await ProductModel.find({});
        res.json({success: true, products})
    } catch (err) {
        res.json({ success: false, message: err.message})
    }
}

const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        const images = [image1, image2, image3, image4].filter((item) => item !== undefined);
        let imagesUrl = await Promise.all(
            images.map(async (image) => {
                let result = await cloundinary.uploader.upload(image.path, {resource_type: 'image'});
                return result.secure_url
            })
        )
        const productData = {
            name, 
            description,
            category,
            price: Number(price),
            subCategory,
            bestseller : bestseller === "true" ? true : false,
            sizes: JSON.parse(sizes),
            image: imagesUrl,
            date: Date.now(),
        };
        const product = new ProductModel(productData);
        await product.save();
        res.json({success: true, message: "product saved successfully"})
    } catch (err) {
        res.json({ success: false, message: err.message})
    }
}

const getProduct = async (req, res) => {
    try {
        const { id } = req.body;
        const product = await ProductModel.findById(id);
        res.json({success: true, product})
    } catch (err) {
        res.json({ success: false, message: err.message})
    }
}

const removeProduct = async (req, res) => {
    try {
        const { id } = req.body;
        await ProductModel.findByIdAndDelete(id);
        res.json({success: true, message: "product deleted successfully"})
    } catch (err) {
        res.json({ success: false, message: err.message})
    }
}


export {listProducts, getProduct, removeProduct, addProduct}