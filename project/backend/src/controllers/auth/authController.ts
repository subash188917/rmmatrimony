import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import { AuthenticatedRequest, LoginRequest, RegisterRequest, ApiResponse, AuthResponse } from '@/types';
import prisma from '@/config/database';
import { AppError } from '@/utils/AppError';
import { generateToken, generateRefreshToken } from '@/utils/jwt';
import { sendVerificationEmail } from '@/services/email/emailService';
import logger from '@/utils/logger';

export const register = async (
  req: Request<{}, ApiResponse<AuthResponse>, RegisterRequest>,
  res: Response<ApiResponse<AuthResponse>>,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, phone, password, firstName, lastName, gender, dateOfBirth } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ email }, { phone }]
      }
    });

    if (existingUser) {
      throw new AppError('User already exists with this email or phone', 400);
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user and profile in transaction
    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          email,
          phone,
          password: hashedPassword,
          isVerified: false,
          isActive: true,
          role: 'USER',
          subscriptionPlan: 'FREE'
        }
      });

      const profile = await tx.profile.create({
        data: {
          userId: user.id,
          firstName,
          lastName,
          dateOfBirth: new Date(dateOfBirth),
          gender,
          height: 0,
          complexion: '',
          physicalStatus: 'Normal',
          maritalStatus: 'NEVER_MARRIED',
          religion: '',
          caste: '',
          motherTongue: '',
          education: '',
          profession: '',
          location: '',
          interests: [],
          photos: [],
          isVerified: false
        }
      });

      return { user, profile };
    });

    // Generate tokens
    const token = generateToken({ userId: result.user.id });
    const refreshToken = generateRefreshToken({ userId: result.user.id });

    // Send verification email
    await sendVerificationEmail(result.user.email, token);

    // Remove password from response
    const { password: _, ...userWithoutPassword } = result.user;

    res.status(201).json({
      success: true,
      message: 'User registered successfully. Please verify your email.',
      data: {
        user: { ...userWithoutPassword, profile: result.profile },
        token,
        refreshToken
      }
    });

    logger.info(`New user registered: ${email}`);
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request<{}, ApiResponse<AuthResponse>, LoginRequest>,
  res: Response<ApiResponse<AuthResponse>>,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Find user with profile
    const user = await prisma.user.findUnique({
      where: { email },
      include: { profile: true }
    });

    if (!user) {
      throw new AppError('Invalid email or password', 401);
    }

    if (!user.isActive) {
      throw new AppError('Account is deactivated', 401);
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new AppError('Invalid email or password', 401);
    }

    // Generate tokens
    const token = generateToken({ userId: user.id });
    const refreshToken = generateRefreshToken({ userId: user.id });

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { updatedAt: new Date() }
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      message: 'Login successful',
      data: {
        user: userWithoutPassword,
        token,
        refreshToken
      }
    });

    logger.info(`User logged in: ${email}`);
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: AuthenticatedRequest,
  res: Response<ApiResponse>,
  next: NextFunction
): Promise<void> => {
  try {
    // In a real application, you would invalidate the token
    // For now, we'll just send a success response
    res.json({
      success: true,
      message: 'Logout successful'
    });

    logger.info(`User logged out: ${req.user?.email}`);
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (
  req: AuthenticatedRequest,
  res: Response<ApiResponse>,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user!.id },
      include: { profile: true },
      select: {
        id: true,
        email: true,
        phone: true,
        isVerified: true,
        isActive: true,
        role: true,
        subscriptionPlan: true,
        createdAt: true,
        updatedAt: true,
        profile: true
      }
    });

    res.json({
      success: true,
      message: 'Profile retrieved successfully',
      data: user
    });
  } catch (error) {
    next(error);
  }
};