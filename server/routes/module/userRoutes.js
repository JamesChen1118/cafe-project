import express from 'express';
import auth from '../../middleware/auth.js';
import userController from '../../controllers/userController.js';

const router = express.Router();

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/profile', auth, userController.getUser);
router.put('/profile', auth, userController.updateUser);

export default router; 