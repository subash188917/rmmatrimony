import { Router } from 'express';
import { register, login, logout, getProfile } from '@/controllers/auth/authController';
import { validate, registerSchema, loginSchema } from '@/middleware/validation';
import { authenticate } from '@/middleware/auth';

const router = Router();

// Public routes
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

// Protected routes
router.post('/logout', authenticate, logout);
router.get('/profile', authenticate, getProfile);

export default router;