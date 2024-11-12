import validator from 'validator';
import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}
// user login
const loginUser = async (req, res) => {
    try {
    const { email, password } = req.body;
    if (!email ||  !password) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }
        const user = await UserModel.findOne({ email: email, password: password });
        if (!user) {
            return res.status(400).json({ msg: "User doesn't exist" })
        }
        const isMatch = await bcrypt.compare(password, user.password);  
        if (isMatch) {
            const token = generateToken(user._id)
            return res.status(200).json({ token })
        } else {
            return res.status(400).json({ msg: "Invalid credentials" })
        }
        
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const registerUser = async (req, res) => {
    try {

    const { name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please enter all fields" })
    }

    const user = await UserModel.findOne({ email: email });
    if (user) {
        return res.status(400).json({ msg: "User already exists" })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ msg: " Invalid email" })
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({ msg: "Password not strong enough" })
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new UserModel({
        name,
        email,
        password: hashedPassword
    })
    console.log(newUser);
    
    const savedUser = await newUser.save()
    const token = generateToken(savedUser._id)

    return res.json({success : true, token})
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            return res.status(200).json({ token })
        } else {
            return res.status(400).json({ msg: "Invalid credentials" })
        }
    } catch (error) {
        return res.status(500).json({ msg: error.message })
    }
}

export { loginUser, registerUser, adminLogin }