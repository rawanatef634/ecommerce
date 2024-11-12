import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const token = req.headers
        if (!token) {
            return res.status(401).json({ msg: "Unauthorized" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
            return res.status(401).json({ msg: "Unauthorized" })
        }
        next();
    } catch (error) {
        res.status(401).json({ msg: "Unauthorized" })
    }
}
export default adminAuth