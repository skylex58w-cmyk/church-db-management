# Setup and Installation Guide

## Prerequisites

- Node.js 18+ and npm/yarn
- PostgreSQL 14+
- Docker and Docker Compose (optional, for containerized setup)
- Git

## Quick Start (Local Development)

### 1. Clone Repository
```bash
git clone https://github.com/skylex58w-cmyk/church-db-management.git
cd church-db-management
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure environment variables
# Edit .env with your settings:
# - DATABASE_URL
# - JWT_SECRET
# - API_PORT
# etc.

# Run database migrations
npm run migrate

# Seed initial data (optional)
npm run seed

# Start development server
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure API endpoint
# Edit .env: REACT_APP_API_URL=http://localhost:3001

# Start development server
npm start
```

### 4. Access Application

- **Web App**: http://localhost:3000
- **API**: http://localhost:3001
- **Docs**: http://localhost:3001/api/docs

## Docker Setup

### Using Docker Compose

```bash
# Build and start all services
docker-compose up -d

# Run migrations
docker-compose exec api npm run migrate

# Access application
# Web: http://localhost:3000
# API: http://localhost:3001
```

## Environment Configuration

### Backend (.env)
```
NODE_ENV=development
API_PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/church_db
JWT_SECRET=your-secret-key-here
JWT_EXPIRY=24h
ADMIN_EMAIL=admin@church.org
ADMIN_PASSWORD=change-me
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3001
REACT_APP_ENV=development
```

## Database Setup

### Create Database
```bash
createdb church_db
```

### Run Migrations
```bash
cd backend
npm run migrate
```

### Seed Data (Optional)
```bash
npm run seed
```

## Initial Admin Setup

1. Start the application
2. Use default admin credentials from .env
3. Change password immediately
4. Configure system settings

## Testing

```bash
# Backend tests
cd backend
npm run test

# Frontend tests
cd frontend
npm run test

# E2E tests
npm run test:e2e
```

## Troubleshooting

### Database Connection Error
- Ensure PostgreSQL is running
- Check DATABASE_URL in .env
- Verify database exists

### Port Already in Use
- Change API_PORT in .env
- Change port in frontend package.json

### JWT Errors
- Ensure JWT_SECRET is set in .env
- Clear browser cookies/localStorage

### Missing Dependencies
- Run `npm install` in both backend and frontend directories
- Clear node_modules and reinstall if issues persist

## Next Steps

1. Read API.md for API documentation
2. Review DATABASE.md for schema details
3. Check ARCHITECTURE.md for system design
4. Configure role-based permissions
5. Set up initial organization/branch data
6. Configure communication settings (email/SMS)
