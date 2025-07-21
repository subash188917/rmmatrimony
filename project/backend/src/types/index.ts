import { Request } from 'express';

// User Types
export interface User {
  id: string;
  email: string;
  phone: string;
  password: string;
  isVerified: boolean;
  isActive: boolean;
  role: UserRole;
  subscriptionPlan: SubscriptionPlan;
  createdAt: Date;
  updatedAt: Date;
  profile?: Profile;
}

export interface Profile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: Gender;
  height: number;
  weight?: number;
  complexion: string;
  physicalStatus: string;
  maritalStatus: MaritalStatus;
  religion: string;
  caste: string;
  motherTongue: string;
  education: string;
  profession: string;
  company?: string;
  income?: number;
  location: string;
  bio?: string;
  interests: string[];
  photos: string[];
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Match {
  id: string;
  userId: string;
  targetUserId: string;
  status: MatchStatus;
  compatibility: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  messageType: MessageType;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Enums
export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR'
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum MaritalStatus {
  NEVER_MARRIED = 'NEVER_MARRIED',
  DIVORCED = 'DIVORCED',
  WIDOWED = 'WIDOWED'
}

export enum SubscriptionPlan {
  FREE = 'FREE',
  PREMIUM = 'PREMIUM',
  GOLD = 'GOLD'
}

export enum MatchStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  BLOCKED = 'BLOCKED'
}

export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  FILE = 'FILE'
}

// Request Types
export interface AuthenticatedRequest extends Request {
  user?: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  phone: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  dateOfBirth: string;
}

export interface ProfileUpdateRequest {
  firstName?: string;
  lastName?: string;
  height?: number;
  weight?: number;
  complexion?: string;
  physicalStatus?: string;
  maritalStatus?: MaritalStatus;
  religion?: string;
  caste?: string;
  motherTongue?: string;
  education?: string;
  profession?: string;
  company?: string;
  income?: number;
  location?: string;
  bio?: string;
  interests?: string[];
}

// Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface AuthResponse {
  user: Omit<User, 'password'>;
  token: string;
  refreshToken: string;
}

// Search and Filter Types
export interface SearchFilters {
  ageMin?: number;
  ageMax?: number;
  heightMin?: number;
  heightMax?: number;
  location?: string;
  religion?: string;
  caste?: string;
  education?: string;
  profession?: string;
  maritalStatus?: MaritalStatus;
  incomeMin?: number;
  incomeMax?: number;
}

export interface PaginationOptions {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}