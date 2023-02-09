import express from 'express';
import activateController from '../controllers/activateController.js';
const router = express.Router();
import authController from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

router.post('/send-otp', authController.sendOtp);
router.post('/verify-otp', authController.verifyOtp);
router.post('/activate', authMiddleware, activateController.activate);
router.get('/refresh', authController.refresh);
router.post('/logout', authMiddleware, authController.logout);

export default router;
