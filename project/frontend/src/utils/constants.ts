// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api/v1',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// App Configuration
export const APP_CONFIG = {
  NAME: 'RM Matrimony',
  DESCRIPTION: 'Find Your Perfect Life Partner',
  VERSION: '1.0.0',
  SUPPORT_EMAIL: 'support@rmmatrimony.com',
  SUPPORT_PHONE: '+91-9876543210',
};

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
};

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp'],
  MAX_PHOTOS: 10,
};

// Form Validation
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 6,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  BIO_MAX_LENGTH: 1000,
  PHONE_PATTERN: /^[0-9]{10}$/,
  EMAIL_PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  TOKEN: 'token',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
  THEME: 'theme',
  LANGUAGE: 'language',
};

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  SEARCH: '/search',
  MATCHES: '/matches',
  MESSAGES: '/messages',
  PROFILE: '/profile',
  ADMIN: '/admin',
};

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    duration: 'Forever',
    features: [
      'Basic profile creation',
      'Limited profile views',
      'Basic search filters',
      '5 interests per month',
    ],
  },
  PREMIUM: {
    name: 'Premium',
    price: 999,
    duration: 'Monthly',
    features: [
      'Unlimited profile views',
      'Advanced search filters',
      'Unlimited interests',
      'Priority customer support',
      'Profile boost',
    ],
  },
  GOLD: {
    name: 'Gold',
    price: 2999,
    duration: 'Quarterly',
    features: [
      'All Premium features',
      'Dedicated relationship manager',
      'Profile verification',
      'Advanced matching algorithm',
      'Video call feature',
      'Priority listing',
    ],
  },
};

// Gender Options
export const GENDER_OPTIONS = [
  { value: 'MALE', label: 'Male' },
  { value: 'FEMALE', label: 'Female' },
];

// Marital Status Options
export const MARITAL_STATUS_OPTIONS = [
  { value: 'NEVER_MARRIED', label: 'Never Married' },
  { value: 'DIVORCED', label: 'Divorced' },
  { value: 'WIDOWED', label: 'Widowed' },
];

// Religion Options
export const RELIGION_OPTIONS = [
  'Hindu',
  'Muslim',
  'Christian',
  'Sikh',
  'Buddhist',
  'Jain',
  'Parsi',
  'Jewish',
  'Other',
];

// Education Options
export const EDUCATION_OPTIONS = [
  'High School',
  'Diploma',
  'Bachelor\'s Degree',
  'Master\'s Degree',
  'Doctorate',
  'Professional Degree',
];

// Profession Options
export const PROFESSION_OPTIONS = [
  'Software Engineer',
  'Doctor',
  'Teacher',
  'Business Owner',
  'Government Employee',
  'Private Employee',
  'Consultant',
  'Freelancer',
  'Student',
  'Other',
];

// Location Options (Major Indian Cities)
export const LOCATION_OPTIONS = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Chennai',
  'Kolkata',
  'Hyderabad',
  'Pune',
  'Ahmedabad',
  'Surat',
  'Jaipur',
  'Lucknow',
  'Kanpur',
  'Nagpur',
  'Indore',
  'Thane',
  'Bhopal',
  'Visakhapatnam',
  'Pimpri-Chinchwad',
  'Patna',
  'Vadodara',
];

// Height Options (in cm)
export const HEIGHT_OPTIONS = Array.from({ length: 81 }, (_, i) => ({
  value: 140 + i,
  label: `${Math.floor((140 + i) / 30.48)}'${Math.round(((140 + i) % 30.48) / 2.54)}" (${140 + i} cm)`,
}));

// Income Options (in INR per annum)
export const INCOME_OPTIONS = [
  { value: 0, label: 'Not Specified' },
  { value: 100000, label: '1-2 Lakhs' },
  { value: 200000, label: '2-3 Lakhs' },
  { value: 300000, label: '3-4 Lakhs' },
  { value: 400000, label: '4-5 Lakhs' },
  { value: 500000, label: '5-7 Lakhs' },
  { value: 700000, label: '7-10 Lakhs' },
  { value: 1000000, label: '10-15 Lakhs' },
  { value: 1500000, label: '15-20 Lakhs' },
  { value: 2000000, label: '20+ Lakhs' },
];

// Common Interests
export const COMMON_INTERESTS = [
  'Reading',
  'Traveling',
  'Cooking',
  'Music',
  'Movies',
  'Sports',
  'Dancing',
  'Photography',
  'Art',
  'Fitness',
  'Yoga',
  'Meditation',
  'Gaming',
  'Technology',
  'Fashion',
  'Nature',
  'Adventure',
  'Writing',
  'Volunteering',
  'Learning',
];

// Date Formats
export const DATE_FORMATS = {
  DISPLAY: 'MMM DD, YYYY',
  INPUT: 'YYYY-MM-DD',
  FULL: 'MMMM DD, YYYY hh:mm A',
  TIME: 'hh:mm A',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  FORBIDDEN: 'Access denied.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Internal server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  FILE_TOO_LARGE: 'File size is too large. Maximum allowed size is 5MB.',
  INVALID_FILE_TYPE: 'Invalid file type. Only JPEG, PNG, and WebP are allowed.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  PROFILE_UPDATED: 'Profile updated successfully!',
  PHOTO_UPLOADED: 'Photo uploaded successfully!',
  INTEREST_SENT: 'Interest sent successfully!',
  MESSAGE_SENT: 'Message sent successfully!',
  REGISTRATION_SUCCESS: 'Registration successful! Welcome to RM Matrimony!',
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logged out successfully!',
};