# MindBot AI Workflow

Backend API for MindBot AI, a mental health chatbot designed to provide support, resources, and conversational assistance for mental well-being.

## Features
- **User Authentication**: Secure registration and login with JWT tokens
- **AI-Powered Chat**: Integration with OpenAI for intelligent conversational responses
- **Mood Tracking**: Users can log and track their mood over time
- **Mental Health Exercises**: Access to guided exercises and activities
- **Dashboard**: Personalized user dashboard with insights and statistics
- **Contact Support**: Built-in contact form for additional support
- **Security**: Helmet for security headers, rate limiting, CORS configuration
- **Database**: SQLite database for data persistence

## Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: SQLite3
- **Authentication**: JWT (JSON Web Tokens), bcryptjs for password hashing
- **AI Integration**: OpenAI API
- **Security**: Helmet, CORS, express-rate-limit
- **Validation**: express-validator
- **Natural Language Processing**: Natural library
- **Testing**: Jest, Mocha, Chai, Supertest
- **Development**: Nodemon for hot reloading

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mindbot-ai-backend.git
   cd mindbot-ai-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see Environment Variables section below)

4. Initialize the database:
   ```bash
   npm run start
   ```
   The database will be automatically initialized on first run.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
FRONTEND_URL=http://localhost:3000
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
JWT_SECRET=your_jwt_secret_key_here
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on the specified PORT (default: 3000). You can access:
- Frontend: http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Chat
- `POST /api/chat/message` - Send a message to the AI chatbot

### Mood Tracking
- `POST /api/mood/log` - Log user's mood
- `GET /api/mood/history` - Get user's mood history

### Exercises
- `GET /api/exercises` - Get available mental health exercises
- `GET /api/exercises/:id` - Get specific exercise details

### Contact
- `POST /api/contact` - Submit contact form

### Dashboard
- `GET /api/dashboard/stats` - Get user dashboard statistics

### Health Check
- `GET /api/health` - Server health status

## Testing

Run the test suite:
```bash
npm test
```

## Project Structure

```
mindbot-ai-backend/
├── database/
│   ├── init.js          # Database initialization
│   └── mindbot.db       # SQLite database file
├── middleware/
│   └── auth.js          # Authentication middleware
├── public/              # Static frontend files
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── chat.html
│   ├── mood.html
│   ├── exercises.html
│   └── contact.html
├── routes/
│   ├── auth.js
│   ├── chat.js
│   ├── mood.js
│   ├── exercises.js
│   ├── contact.js
│   └── dashboard.js
├── test/
│   ├── api.test.js
│   └── api.test.mjs
├── server.js            # Main server file
├── package.json
├── package-lock.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

MindBott AI

---

For more information about MindBot AI and our mission to improve mental health support through AI, visit [https://akshta31.github.io/MindBotAI_Website/].
