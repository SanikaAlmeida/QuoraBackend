# Quora Backend Clone

A RESTful API for a Quora-style Question & Answer platform where users can ask questions, post answers, and interact with content. Built using Node.js, Express, and MongoDB.

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Multer (for file uploads)
- JWT (authentication)

## 🔗 Deployed Link

Live backend:  
🌐 [`https://quora-clone-t7q2.onrender.com`](https://quora-clone-t7q2.onrender.com)

## 📮 API Endpoints

### 🧑 User Routes

| Method | Endpoint              | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/user/signup`              | Register a new user            |
| POST   | `/user/login`               | Login and receive a token      |
| POST   | `/user/follow/:id`          | Follow a user by ID            |
| POST   | `/user/unfollow/:id`        | Unfollow a user by ID          |
| POST   | `/user/uploadpic`           | Upload profile picture         |
| DELETE | `/user/deleteuser`          | Delete the current user        |
| GET    | `/user/getfollower`         | Get list of followers          |
| PATCH  | `/user/updateuser`          | Update user details            |
| GET    | `/user/getusers`            | Get all users                  |

---

### ❓ Question Routes

| Method | Endpoint              | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/question/ask`                 | Ask a new question             |
| GET    | `/question/display`             | Display all questions          |
| DELETE | `/question/deletequestion`      | Delete a question              |
| PATCH  | `/question/updatequestion`      | Update a question              |

---

### 💬 Answer Routes

| Method | Endpoint              | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/answer/answer`              | Add an answer                  |
| POST   | `/answer/upvote/:id`          | Upvote an answer by ID         |
| POST   | `/answer/downvote/:id`        | Downvote an answer by ID       |
| DELETE | `/answer/deleteanswer`        | Delete an answer               |
| PATCH  | `/answer/updateanswer`        | Update an answer               |
| GET    | `/answer/getanswers`          | Get all answers                |

---

### 🗨️ Comment Routes

| Method | Endpoint              | Description                    |
|--------|------------------------|--------------------------------|
| POST   | `/comment/comment`             | Add a comment                  |
| GET    | `/comment/getcomment`          | Get all comments               |
| DELETE | `/comment/deletecomment`       | Delete a comment               |
| PATCH  | `/comment/updatecomment`       | Update a comment               |

---

## 🛡️ Authentication

All routes except `/user/signup` and `/user/login` require a valid JWT token in the `Authorization` header:
