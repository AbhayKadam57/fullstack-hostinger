# Full-Stack React + Express Application

A full-stack application with a React frontend and Express backend, containerized using Docker.

## 🚀 Project Structure

```
.
├── client/          # React frontend (Vite)
├── server/          # Express backend
├── docker-compose.yml
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **ESLint** - Code linting

### Backend
- **Express 5.1.0** - Web framework
- **Node.js 22** - Runtime environment
- **CORS** - Cross-origin resource sharing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📋 Prerequisites

- Node.js 22 or higher
- Docker and Docker Compose
- Git

## 🏃 Getting Started

### Local Development (Without Docker)

#### Backend Server
```bash
cd server
npm install
npm start
```
Server runs on `http://localhost:4000`

#### Frontend Client
```bash
cd client
npm install
npm run dev
```
Client runs on `http://localhost:5173`

### Docker Development

#### Build and run with Docker Compose
```bash
docker compose up
```

#### Run in detached mode
```bash
docker compose up -d
```

#### Stop containers
```bash
docker compose down
```

#### Rebuild containers
```bash
docker compose up --build
```

## 🌐 API Endpoints

### Server (Port 4000)
- `GET /api/message` - Returns a greeting message from the server

## 🐳 Docker Configuration

### Services

| Service | Container Name | Port Mapping | Description |
|---------|---------------|--------------|-------------|
| server  | express-server | 4000:4000 | Express API server |
| client  | react-client | 5174:3000 | React application |

### Networks
- `fullstack-net` - Bridge network for inter-container communication

## 📁 Environment Variables

Currently, the application uses hardcoded ports. For production, consider using environment variables:

- `PORT` - Server port (default: 4000)
- `VITE_API_URL` - API base URL for the client

## 🔧 Common Issues

### Port Already in Use
If you encounter port conflicts:
```bash
# Check what's using port 4000
netstat -ano | grep :4000

# Kill the process (Windows)
taskkill /PID <PID> /F

# Or use different ports in docker-compose.yml
```

### Docker Compose Errors
```bash
# Check logs
docker compose logs

# Check specific service logs
docker compose logs server
docker compose logs client
```

## 📝 Scripts

### Server
- `npm start` - Start the Express server

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚢 Deployment

The application is containerized and ready for deployment to:
- Hostinger VPS
- AWS ECS
- Google Cloud Run
- Any Docker-compatible platform

## 📄 License

ISC

## 👤 Author

Your Name

---

**Note**: Make sure Docker Desktop is running before executing Docker commands.
