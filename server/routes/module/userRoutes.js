import express from 'express';
import authMiddleware from '../../middleware/authMiddleware.js';
import userController from '../../controllers/userController.js';

const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);

router.get("/profile", authMiddleware, userController.getUser);
router.put("/profile", authMiddleware, userController.updateUser);

export default router; 