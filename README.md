### Technical Overview

The project is structured as a full-stack web application consisting of a **Node.js/Express Backend** and a **Vite-powered React Frontend** designed to provide automated code reviews using an AI service.

Backend Architecture:
Framework:** Express.js (`server.js`, `app.js`) handling RESTful middleware and routing.


Routing & Controllers:** Separation of concerns via `ai.routes.js` and `ai.controller.js`, routing requests cleanly to service layers.


Service Layer (`ai.service.js`):** Interacts with the underlying LLM provider/API to process code snippets, analyze bugs, detect code smells, and suggest performance improvements or refactoring.




Frontend Architecture:
Bundler & Build Tool:** Vite (`vite.config.js`), providing fast Hot Module Replacement (HMR) and optimized builds.


UI Framework:** React (`App.jsx`, `main.jsx`) with custom styling (`App.css`, `index.css`).


Tooling:** ESLint configured (`eslint.config.js`) for code quality and syntax standards.


## Project Structure

text
AI-code-reviewer-main/
├── Backend/
│   ├── server.js            # Entry point for the Express server
│   ├── src/
│   │   ├── app.js           # Express app configuration
│   │   ├── controllers/     # Request handlers (ai.controller.js)
│   │   ├── routes/          # API endpoints (ai.routes.js)
│   │   └── services/        # AI integration logic (ai.service.js)
│   └── package.json
└── Frontend/
    ├── src/
    │   ├── App.jsx          # Main React component
    │   ├── App.css          # Styling
    │   └── main.jsx         # React DOM entry
    ├── index.html
    ├── vite.config.js       # Vite configuration
    └── package.json





## Features

* **Automated Code Analysis:** Submit raw code snippets to receive immediate algorithmic feedback and optimization tips.
* **Modular Backend Architecture:** Clean separation of routes, controllers, and external AI service wrappers.
* **Modern React Frontend:** Responsive user interface built with Vite and React for snappy code submission and review rendering.



## Getting Started

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

### Installation & Setup

1. **Clone the repository and navigate to the project directory.**
2. **Setup the Backend:**
bash
cd Backend
npm install


Create a `.env` file in the `Backend` directory and add your required environment variables (such as your AI API key):
env
PORT=5000
AI_API_KEY=your_api_key_here



Start the backend server:
bash
node server.js



3. **Setup the Frontend:**
bash
cd ../Frontend
npm install




Start the development server:
bash
npm run dev






