# 📝 Task Manager (React + Flask)

A simple full-stack Task Manager web application built with **React** (frontend) and **Flask** (backend).

## 🚀 Features

- Add new tasks
- Delete existing tasks
- Dynamic updates with REST API
- Cross-origin communication with CORS

## 🧩 Tech Stack

- **Frontend**: React, Axios
- **Backend**: Flask, Flask-CORS

## 🔧 Getting Started

### Backend Setup (Flask)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install flask flask-cors
python app.py
```

### Frontend Setup (React)

```bash
cd frontend
npx create-react-app .
npm install axios
# Replace src/App.js with the provided App.js
npm start
```

### API Endpoints

| Method | Endpoint         | Description      |
|--------|------------------|------------------|
| GET    | `/tasks`         | List all tasks   |
| POST   | `/tasks`         | Add a new task   |
| DELETE | `/tasks/<id>`    | Delete a task    |
