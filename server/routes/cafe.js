import express from 'express';
import { getCafes, getCafeById } from '../controllers/cafeController.js';

const router = express.Router();

router.get('/', getCafes);
router.get('/:id', getCafeById);

export default router;
