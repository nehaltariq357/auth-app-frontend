# 🟣 Full Auth System - Frontend

A modern frontend for authentication system built with Next.js, supporting login, signup, protected routes, and secure token handling.

---

## 🚀 Features

* User Signup & Login UI
* JWT Authentication Handling
* Protected Pages
* Auto login with cookies
* Logout functionality
* Clean UI structure
* API integration with backend

---

## 🧰 Tech Stack

* Next.js
* TypeScript 
* Fetch API
* Next.js routing

---

## 📁 Folder Structure

```bash
/frontend
  /components
  /pages 
  /utils
```

---

## ⚙️ Setup

### Install dependencies

```bash
npm install
```

### Run project

```bash
npm run dev
```

---

## 🔐 Authentication Flow

1. User logs in or signs up
2. Backend returns JWT (stored in httpOnly cookies)
3. Frontend requests protected APIs
4. Middleware verifies authentication
5. User stays logged in automatically

---

## 📡 API Integration

Example:

```ts
GET /api/user/dashboard
POST /api/auth/login
POST /api/auth/signup
```

---

## 🎯 Protected Routes

* Dashboard
* Profile Page


Only accessible when user is authenticated.

---