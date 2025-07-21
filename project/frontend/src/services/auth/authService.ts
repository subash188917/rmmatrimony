import { apiClient, ApiResponse } from '../api/apiClient';

// Types
export interface User {
  id: string;
  email: string;
  phone: string;
  isVerified: boolean;
  isActive: boolean;
  role: 'USER' | 'ADMIN' | 'MODERATOR';
  subscriptionPlan: 'FREE' | 'PREMIUM' | 'GOLD';
  createdAt: string;
  updatedAt: string;
  profile?: Profile;
}

export interface Profile {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'MALE' | 'FEMALE';
  height: number;
  weight?: number;
  complexion: string;
  physicalStatus: string;
  maritalStatus: 'NEVER_MARRIED' | 'DIVORCED' | 'WIDOWED';
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
  createdAt: string;
  updatedAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
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
  gender: 'MALE' | 'FEMALE';
  dateOfBirth: string;
}

class AuthService {
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/login', credentials);
    
    if (response.success && response.data) {
      this.setAuthData(response.data);
      return response.data;
    }
    
    throw new Error(response.message || 'Login failed');
  }

  async register(userData: RegisterRequest): Promise<AuthResponse> {
    const response = await apiClient.post<AuthResponse>('/auth/register', userData);
    
    if (response.success && response.data) {
      this.setAuthData(response.data);
      return response.data;
    }
    
    throw new Error(response.message || 'Registration failed');
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      // Continue with logout even if API call fails
    } finally {
      this.clearAuthData();
    }
  }

  async getProfile(): Promise<User> {
    const response = await apiClient.get<User>('/auth/profile');
    
    if (response.success && response.data) {
      return response.data;
    }
    
    throw new Error(response.message || 'Failed to get profile');
  }

  async refreshToken(): Promise<AuthResponse> {
    const refreshToken = localStorage.getItem('refreshToken');
    
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiClient.post<AuthResponse>('/auth/refresh', {
      refreshToken
    });
    
    if (response.success && response.data) {
      this.setAuthData(response.data);
      return response.data;
    }
    
    throw new Error(response.message || 'Token refresh failed');
  }

  private setAuthData(authData: AuthResponse): void {
    localStorage.setItem('token', authData.token);
    localStorage.setItem('refreshToken', authData.refreshToken);
    localStorage.setItem('user', JSON.stringify(authData.user));
  }

  private clearAuthData(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  getStoredToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getStoredToken();
  }
}

export const authService = new AuthService();
export default authService;