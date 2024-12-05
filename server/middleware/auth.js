import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    // 從 header 取得 token
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: '沒有權限' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token 無效' });
    }
};

export default auth; 