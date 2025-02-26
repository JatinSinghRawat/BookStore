# 📚 MERN Book Store App

## 🚀 Overview
The **MERN Book Store App** is a full-stack web application built using the **MERN** (MongoDB, Express, React, Node.js) stack. This app allows users to browse books, sign up, log in, and enjoy an intuitive UI built with **Tailwind CSS** and **DaisyUI**.

## ✨ Features
- 🔐 **Authentication**: Signup, login with secure password hashing (bcryptjs)
- 🎨 **Great UI**: Built with **Tailwind CSS** and **DaisyUI** for a modern, responsive interface
- 📰 **Newsletter Subscription**: Users can subscribe to receive updates
- 📞 **Contact Form**: Integrated contact form for user inquiries
- 📚 **Toggler**: Theme toggler from dark mode to light mode and vice versa
- 🔄 **React Hook Form**: Efficient form handling and validation
- 🍞 **React Hot Toast**: Beautiful notifications and alerts
- 📡 **REST API**: Built with **Express.js** and **MongoDB** for a scalable backend

---

## 🛠️ Tech Stack
### Frontend
- **React** (v19.0.0) - Component-based UI
- **React Router DOM** (v7.2.0) - Navigation & Routing
- **Axios** (v1.7.9) - API Calls
- **React Hook Form** (v7.54.2) - Form handling
- **React Slick** (v0.30.3) & **Slick Carousel** (v1.8.1) - Image sliders
- **Tailwind CSS** (v4.0.6) & **DaisyUI** - UI styling & components

### Backend
- **Node.js** (Runtime)
- **Express.js** (v4.21.2) - Backend framework
- **MongoDB & Mongoose** (v8.10.1) - Database & ORM
- **BcryptJS** (v3.0.2) - Secure password hashing
- **Cors** (v2.8.5) - Enable cross-origin requests
- **Dotenv** (v16.4.7) - Manage environment variables
- **Nodemailer** (v6.10.0) - Email service for contact forms
- **Nodemon** (v3.1.9) - Auto-restart server on changes

---

## 📌 Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/JatinSinghRawat/BookStore.git
cd BookStore
```

### 2️⃣ Install Dependencies
#### Frontend
```sh
cd frontend
npm install
```

#### Backend
```sh
cd backend
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file inside the backend folder and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### 4️⃣ Start the Development Servers
#### Start Backend Server
```sh
npm run dev
```
#### Start Frontend Server
```sh
npm run dev
```

The app will be live at: `http://localhost:5173/`

---

## 📜 API Endpoints
### Auth Routes
- **POST** `/signup` - Register a new user
- **POST** `/login` - Login user

### Book Routes
- **GET** `/course` - Get all books

### Contact Form
- **POST** `/contact` - Send a message via email

---

## 📸 Screenshots

#### Home

![image](https://github.com/user-attachments/assets/bf01018c-510c-4fd0-8369-2f96cd7b036b)

#### Course

![image](https://github.com/user-attachments/assets/16057da2-651e-4170-8055-1600a4ca33d2)

#### Contact Us

![image](https://github.com/user-attachments/assets/d8751ecd-6b7c-40d3-a5e9-c72473a55abf)

#### Sign up

![image](https://github.com/user-attachments/assets/c59db33b-08b5-47b7-95a8-1c6edad8d7fb)

#### Login

![image](https://github.com/user-attachments/assets/a23449ed-7425-4271-9f81-56bedcb7014b)




---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit pull requests.

---

## 📄 License
This project is licensed under the MIT License.

