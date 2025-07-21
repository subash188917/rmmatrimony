import { useState, useEffect } from 'react';
import { authService, User, LoginRequest, RegisterRequest } from '../services/auth/authService';

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  isAuthenticated: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const storedUser = authService.getStoredUser();
      if (storedUser && authService.isAuthenticated()) {
        // Verify token is still valid by fetching fresh profile
        const freshProfile = await authService.getProfile();
        setUser(freshProfile);
      }
    } catch (error) {
      // Token might be expired, clear stored data
      authService.logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: LoginRequest): Promise<void> => {
    setLoading(true);
    try {
      const authData = await authService.login(credentials);
      setUser(authData.user);
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterRequest): Promise<void> => {
    setLoading(true);
    try {
      const authData = await authService.register(userData);
      setUser(authData.user);
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const refreshProfile = async (): Promise<void> => {
    try {
      const freshProfile = await authService.getProfile();
      setUser(freshProfile);
    } catch (error) {
      console.error('Failed to refresh profile:', error);
    }
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
    refreshProfile,
    isAuthenticated: !!user && authService.isAuthenticated(),
  };
};