import express from 'express';
import cafeController from '../../controllers/cafeController.js';
import middleware from '../../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', cafeController.getCafes);

export default router;