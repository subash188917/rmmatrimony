# RM Matrimony Backend API

A comprehensive backend API for the RM Matrimony platform built with Node.js, Express, TypeScript, and Prisma.

## 🚀 Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **User Management**: Complete user registration, profile management
- **Matching System**: Advanced matching algorithm with compatibility scoring
- **Real-time Messaging**: Socket.IO integration for instant messaging
- **File Upload**: Cloudinary integration for image uploads
- **Email Service**: Nodemailer for transactional emails
- **SMS Service**: Twilio integration for SMS notifications
- **Payment Integration**: Stripe for subscription management
- **Admin Panel**: Complete admin dashboard with analytics
- **Rate Limiting**: Protection against abuse
- **Logging**: Winston for comprehensive logging
- **Testing**: Jest for unit and integration tests
- **Documentation**: Auto-generated API documentation

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis
- **Authentication**: JWT
- **File Upload**: Cloudinary
- **Email**: Nodemailer
- **SMS**: Twilio
- **Payments**: Stripe
- **Real-time**: Socket.IO
- **Testing**: Jest
- **Logging**: Winston

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/          # Route controllers
│   │   ├── auth/            # Authentication controllers
│   │   ├── user/            # User management controllers
│   │   ├── profile/         # Profile controllers
│   │   ├── match/           # Matching system controllers
│   │   ├── message/         # Messaging controllers
│   │   └── admin/           # Admin controllers
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── middleware/          # Custom middleware
│   │   ├── auth.ts          # Authentication middleware
│   │   ├── validation.ts    # Request validation
│   │   ├── upload.ts        # File upload middleware
│   │   └── errorHandler.ts  # Error handling
│   ├── services/            # Business logic services
│   │   ├── email/           # Email service
│   │   ├── notification/    # Notification service
│   │   ├── matching/        # Matching algorithm
│   │   └── payment/         # Payment service
│   ├── utils/               # Utility functions
│   ├── config/              # Configuration files
│   ├── types/               # TypeScript type definitions
│   └── server.ts            # Application entry point
├── prisma/                  # Database schema and migrations
├── tests/                   # Test files
├── uploads/                 # File upload directory
└── logs/                    # Application logs
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- Redis
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
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

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Run migrations
   npx prisma migrate dev
   
   # Seed database (optional)
   npx prisma db seed
   ```

5. **Start the server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm run build
   npm start
   ```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/profile` - Get user profile

### User Endpoints

- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update user profile
- `POST /api/v1/users/upload-photo` - Upload profile photo
- `DELETE /api/v1/users/photo/:id` - Delete profile photo

### Matching Endpoints

- `GET /api/v1/matches/recommendations` - Get match recommendations
- `POST /api/v1/matches/interest` - Send interest
- `PUT /api/v1/matches/:id/respond` - Respond to interest
- `GET /api/v1/matches/sent` - Get sent interests
- `GET /api/v1/matches/received` - Get received interests

### Messaging Endpoints

- `GET /api/v1/messages/conversations` - Get conversations
- `GET /api/v1/messages/:conversationId` - Get messages
- `POST /api/v1/messages` - Send message
- `PUT /api/v1/messages/:id/read` - Mark message as read

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

## 🔧 Development

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

### Database Operations

```bash
# View database in browser
npx prisma studio

# Reset database
npx prisma migrate reset

# Deploy migrations to production
npx prisma migrate deploy
```

## 🚀 Deployment

### Environment Variables

Make sure to set all required environment variables in production:

- `NODE_ENV=production`
- `DATABASE_URL`
- `JWT_SECRET`
- `REDIS_URL`
- Email service credentials
- Cloudinary credentials
- Stripe credentials
- Twilio credentials

### Build and Deploy

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📊 Monitoring

- **Health Check**: `GET /health`
- **Logs**: Check `logs/` directory
- **Database**: Use Prisma Studio for database monitoring
- **Redis**: Monitor Redis connection and cache performance

## 🔐 Security Features

- JWT authentication with refresh tokens
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Helmet for security headers
- Input validation and sanitization
- SQL injection prevention with Prisma
- File upload restrictions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Run linting and tests
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.