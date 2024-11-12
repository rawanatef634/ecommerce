import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers;
        if (!token) {
            return res.status(401).json({ msg: "Unauthorized" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = decoded.id;
        next();    
    } catch (error) {
        res.status(401).json({ msg: "Unauthorized" })   
    }
}

export default auth