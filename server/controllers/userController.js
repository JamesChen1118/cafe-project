import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// 註冊
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 檢查用戶是否已存在
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: '用戶已存在' });
        }

        // 建立新用戶
        user = new User({
            username,
            email,
            password
        });

        // 加密密碼
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // 產生 JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '24h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// 登入
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 檢查用戶是否存在
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: '用戶不存在' });
        }

        // 驗證密碼
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: '密碼錯誤' });
        }

        // 產生 JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '24h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
