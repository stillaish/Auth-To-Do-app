# 🚀 Auth & Todo API (Node.js + Express)

A secure RESTful API for user authentication and todo management built with **Node.js, Express, MongoDB, and JWT**.

---

## 📌 Features

* 🔐 User Registration & Login (JWT Authentication)
* 🔒 Password Hashing using bcrypt
* 🛡️ Protected Routes using Middleware
* 📝 Full CRUD for Todos
* 👤 User-specific data isolation
* ⚡ Clean and scalable folder structure

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB + Mongoose
* **Auth:** JSON Web Token (JWT)
* **Security:** bcrypt (password hashing)

---

## 📁 Project Structure

```
auth-todo-api/
│
├── config/
│   └── db.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Todo.js
├── routes/
│   ├── authRoutes.js
│   └── todoRoutes.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone <your-repo-url>
cd auth-todo-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in root:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todoDB
JWT_SECRET= security key 
```

---

## ▶️ Run the Server

```bash
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 🔐 Authentication Flow

1. User registers
2. Password is hashed using bcrypt
3. User logs in → receives JWT token
4. Token is used to access protected routes

---

## 🔑 API Endpoints

### 🔐 Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

### 📝 Todo Routes (Protected)

| Method | Endpoint       | Description     |
| ------ | -------------- | --------------- |
| GET    | /api/todos     | Get all todos   |
| POST   | /api/todos     | Create new todo |
| PUT    | /api/todos/:id | Update todo     |
| DELETE | /api/todos/:id | Delete todo     |

---

## 🔑 Authorization Header

```
Authorization: Bearer <your_token>
```

---

## 🧪 Example Requests

### 📌 Register

```json
POST /api/auth/register
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

### 🔑 Login

```json
POST /api/auth/login
{
  "email": "user@gmail.com",
  "password": "123456"
}
```

---

### 📝 Create Todo

```json
POST /api/todos
Headers:
Authorization: Bearer <token>

Body:
{
  "title": "Learn Express"
}
```

---

## 🛡️ Security Practices

* Password hashing (bcrypt)
* JWT authentication
* Protected routes via middleware
* User-specific data access control

---

## 👨‍💻 Author

Aish Maheshwari

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
