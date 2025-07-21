// Re-export auth types
export * from '../services/auth/authService';

// Common types
export interface PaginationOptions {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

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
  maritalStatus?: 'NEVER_MARRIED' | 'DIVORCED' | 'WIDOWED';
  incomeMin?: number;
  incomeMax?: number;
}

// Match types
export interface Match {
  id: string;
  userId: string;
  targetUserId: string;
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED' | 'BLOCKED';
  compatibility?: number;
  createdAt: string;
  updatedAt: string;
  targetUser?: User;
}

// Message types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  messageType: 'TEXT' | 'IMAGE' | 'FILE';
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  sender?: User;
  receiver?: User;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage?: Message;
  unreadCount: number;
  updatedAt: string;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// UI types
export interface NotificationItem {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

// API types
export interface ApiError {
  success: false;
  message: string;
  error?: string;
  statusCode?: number;
}

// File upload types
export interface FileUploadProgress {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  url?: string;
  error?: string;
}