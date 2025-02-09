# 🏡 Hostel Management System

## 🚀 Overview
The **Hostel Management System** is a web-based platform designed to simplify hostel management for colleges and students. It allows colleges to manage hostels, track room availability, and handle student registrations efficiently. Students can register, select their college, choose a hostel, and book rooms seamlessly.

---

## 📌 Features

### 🎓 **For Colleges:**
- Multi-college support
- Hostel and room management
- Real-time room availability tracking
- Secure college authentication via Firebase
- Admin dashboard for monitoring hostel data
- Instant notifications for updates

### 🏠 **For Students:**
- College and hostel selection
- Room type selection (Single, Double, Triple occupancy)
- Easy self-registration
- Secure authentication

---

## 🛠️ Tech Stack

### 🔹 **Frontend:**
- Vite (React + JavaScript)
- Tailwind CSS for styling
- ShadCN UI for components

### 🔹 **Backend:**
- Firebase Authentication
- Firebase Firestore (Database)
- Firebase Storage (For storing documents/images if needed)

---

## 🏗️ Setup & Installation

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/dev-aditya-lab/EnderDevs-Hostel-Management-System.git
cd EnderDevs-Hostel-Management-System
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Set Up Tailwind CSS**
Make sure Tailwind is configured properly in `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 4️⃣ **Initialize shadcn/ui**
```sh
npx shadcn@latest init
```

Install required components:
```sh
npx shadcn@latest add button card dialog
```

### 5️⃣ **Run the Development Server**
```sh
npm run dev
```
The project will be live at: `http://localhost:5173`

---

## 🔥 Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project and add a web app
3. Enable **Authentication** (Google, Email/Password, etc.)
4. Enable **Firestore Database** in test mode
5. Get your Firebase config and replace it in `src/firebaseConfig.js`

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
export default firebaseConfig;
```

---

## 📜 Folder Structure
```
📂 hostel-management
│── 📁 src
│   ├── 📁 components  # Reusable UI components
│   ├── 📁 pages       # Main pages (Landing, Dashboard, etc.)
│   ├── 📁 lib         # Utility functions
│   ├── 📁 firebase    # Firebase configuration & services
│   ├── index.css     # Tailwind styles
│   ├── App.jsx       # Main App component
│   ├── main.jsx      # Root entry file
│── 📄 package.json
│── 📄 tailwind.config.js
│── 📄 README.md
```

---

## 🎯 Future Enhancements
- Payment integration for hostel booking
- Admin panel with advanced analytics
- AI-powered room allocation suggestions
- Multi-language support

---

## 🤝 Contributing
Want to contribute? Feel free to fork the repo and submit a PR!

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 📞 Contact
For support or inquiries, reach out at: [support@hostelmanage.com](mailto:support@hostelmanage.com)

