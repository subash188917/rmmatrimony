# RM Matrimony Frontend

A modern, responsive frontend application for the RM Matrimony platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern UI/UX**: Clean, intuitive design with smooth animations
- **Responsive Design**: Works perfectly on all devices
- **Type Safety**: Full TypeScript support
- **Authentication**: Secure JWT-based authentication
- **Real-time Messaging**: Socket.IO integration for instant messaging
- **Advanced Search**: Comprehensive filtering and search capabilities
- **Profile Management**: Complete profile creation and management
- **Matching System**: Smart matching algorithm with compatibility scores
- **File Upload**: Drag-and-drop image uploads with progress tracking
- **PWA Ready**: Progressive Web App capabilities
- **Performance Optimized**: Code splitting and lazy loading

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context + Custom Hooks
- **HTTP Client**: Axios
- **Forms**: React Hook Form
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
frontend/
├── public/                  # Static assets
├── src/
│   ├── components/          # Reusable components
│   │   ├── common/         # Common UI components
│   │   ├── forms/          # Form components
│   │   ├── layout/         # Layout components
│   │   └── ui/             # Base UI components
│   ├── pages/              # Page components
│   │   ├── auth/           # Authentication pages
│   │   ├── user/           # User pages
│   │   └── admin/          # Admin pages
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services
│   │   ├── api/            # API client
│   │   ├── auth/           # Authentication service
│   │   └── storage/        # Local storage utilities
│   ├── store/              # State management
│   │   ├── slices/         # State slices
│   │   └── middleware/     # Custom middleware
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── assets/             # Static assets
│   │   ├── images/         # Images
│   │   ├── icons/          # Icons
│   │   └── fonts/          # Fonts
│   ├── App.tsx             # Main App component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── tests/                  # Test files
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Fill in your environment variables in `.env`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run preview         # Preview production build

# Code Quality
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues
npm run type-check      # Run TypeScript type checking

# Testing
npm run test            # Run tests
npm run test:ui         # Run tests with UI
npm run test:coverage   # Run tests with coverage
```

## 🎨 Styling

### Tailwind CSS

The project uses Tailwind CSS for styling with a custom configuration:

- **Custom Colors**: Primary, secondary, and gold color schemes
- **Custom Fonts**: Inter for body text, Playfair Display for headings
- **Custom Animations**: Fade-in, slide-up, and custom bounce animations
- **Responsive Design**: Mobile-first approach with custom breakpoints

### Component Structure

```tsx
// Example component structure
const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        {/* Component content */}
      </motion.div>
    </div>
  );
};
```

## 🔐 Authentication

The app uses JWT-based authentication with the following flow:

1. **Login/Register**: User credentials are sent to the backend
2. **Token Storage**: JWT tokens are stored in localStorage
3. **API Requests**: Tokens are automatically attached to API requests
4. **Token Refresh**: Automatic token refresh on expiration
5. **Route Protection**: Private routes require authentication

```tsx
// Using the auth hook
const { user, login, logout, loading } = useAuth();

// Protected route example
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" />;
  
  return <>{children}</>;
};
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

```tsx
// Responsive classes example
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Content */}
</div>
```

## 🚀 Performance Optimization

### Code Splitting

```tsx
// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Profile = lazy(() => import('./pages/Profile'));

// Usage with Suspense
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
</Suspense>
```

### Image Optimization

```tsx
// Optimized image component
const OptimizedImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="object-cover transition-transform hover:scale-105"
      {...props}
    />
  );
};
```

## 🧪 Testing

### Unit Tests

```tsx
// Example test
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Integration Tests

```tsx
// Example integration test
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('submits form with valid data', async () => {
    const onSubmit = jest.fn();
    render(<LoginForm onSubmit={onSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' }
    });
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        email: 'test@example.com'
      });
    });
  });
});
```

## 🌐 API Integration

### Service Layer

```tsx
// API service example
class ProfileService {
  async getProfile(id: string): Promise<Profile> {
    const response = await apiClient.get<Profile>(`/profiles/${id}`);
    return response.data;
  }
  
  async updateProfile(id: string, data: ProfileUpdateRequest): Promise<Profile> {
    const response = await apiClient.put<Profile>(`/profiles/${id}`, data);
    return response.data;
  }
}

export const profileService = new ProfileService();
```

### Custom Hooks

```tsx
// Custom hook for API data
export const useProfile = (id: string) => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await profileService.getProfile(id);
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [id]);
  
  return { profile, loading, error };
};
```

## 🔧 Configuration

### Environment Variables

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000

# App Configuration
VITE_APP_NAME=RM Matrimony
VITE_APP_VERSION=1.0.0

# External Services
VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
```

### Vite Configuration

```ts
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
  },
});
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing component structure
- Write tests for new features
- Use semantic commit messages
- Follow the ESLint configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@rmmatrimony.com or join our Slack channel.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- All contributors who helped build this project