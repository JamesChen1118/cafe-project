import express from 'express';
// import cafeController from '../../controllers/cafeController.js';
import auth from '../../middleware/auth.js';

const router = express.Router();

// router.get('/', cafeController.getCafes);
// router.post('/', auth, cafeController.createCafe);
// router.put('/:id', auth, cafeController.updateCafe);
// router.delete('/:id', auth, cafeController.deleteCafe);

export default router; 