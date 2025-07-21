import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import { AppError } from '@/utils/AppError';

export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    
    if (error) {
      const errorMessage = error.details.map(detail => detail.message).join(', ');
      throw new AppError(errorMessage, 400);
    }
    
    next();
  };
};

// Common validation schemas
export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  password: Joi.string().min(6).required(),
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  gender: Joi.string().valid('MALE', 'FEMALE').required(),
  dateOfBirth: Joi.date().max('now').required()
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const profileUpdateSchema = Joi.object({
  firstName: Joi.string().min(2).max(50),
  lastName: Joi.string().min(2).max(50),
  height: Joi.number().min(100).max(250),
  weight: Joi.number().min(30).max(200),
  complexion: Joi.string().max(50),
  physicalStatus: Joi.string().max(50),
  maritalStatus: Joi.string().valid('NEVER_MARRIED', 'DIVORCED', 'WIDOWED'),
  religion: Joi.string().max(50),
  caste: Joi.string().max(50),
  motherTongue: Joi.string().max(50),
  education: Joi.string().max(100),
  profession: Joi.string().max(100),
  company: Joi.string().max(100),
  income: Joi.number().min(0),
  location: Joi.string().max(100),
  bio: Joi.string().max(1000),
  interests: Joi.array().items(Joi.string().max(50))
});

export const searchSchema = Joi.object({
  ageMin: Joi.number().min(18).max(100),
  ageMax: Joi.number().min(18).max(100),
  heightMin: Joi.number().min(100).max(250),
  heightMax: Joi.number().min(100).max(250),
  location: Joi.string().max(100),
  religion: Joi.string().max(50),
  caste: Joi.string().max(50),
  education: Joi.string().max(100),
  profession: Joi.string().max(100),
  maritalStatus: Joi.string().valid('NEVER_MARRIED', 'DIVORCED', 'WIDOWED'),
  incomeMin: Joi.number().min(0),
  incomeMax: Joi.number().min(0),
  page: Joi.number().min(1).default(1),
  limit: Joi.number().min(1).max(100).default(10)
});