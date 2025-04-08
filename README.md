# Auth-System  (React + Spring Boot + MongoDB)

A simple user authentication system that supports user registration and login, built with **ReactJS** for the frontend and **Spring Boot** for the backend, using **MongoDB** as the database.


## 🧾 Objective

Build a basic user authentication system with:

- A **SignUp form** that stores user data in the MongoDB database.
- A **SignIn form** that validates user credentials and returns a login message.

## 🛠 Tech Stack

### 🖥 Frontend
- ReactJS
- Axios (for API calls)
- Form validation with basic HTML and JavaScript

### ⚙️ Backend
- Spring Boot
- RESTful API
- CORS enabled for frontend requests

### 🗃 Database
- MongoDB


## 🌐 API Endpoints

| Endpoint    | Method | Description                |
|-------------|--------|----------------------------|
| `/signup`   | POST   | Register new user          |
| `/login`    | POST   | Validate login credentials |


## ⚙️ How to Run

### Prerequisites
- Node.js & npm
- MongoDB running on default port (`27017`)
- Java 17
- Maven

### Backend (Spring Boot)
```bash
cd backend
mvn spring-boot:run
```

### Frontend (React)
```bash
cd frontend
npm install
npm start
```

