# 🎵 Moody Player

A full-stack mood-based music recommendation application that detects facial expressions in real time and recommends songs based on the user's current mood.

The application uses **Face API** for emotion detection, **React** for the frontend, **Node.js & Express** for the backend, **MongoDB** for storing song metadata, and **ImageKit** for audio storage and delivery.

---

## ✨ Features

- 😊 Real-time facial expression detection
- 🎵 Mood-based song recommendations
- ☁️ Audio upload using ImageKit
- 📂 MongoDB database integration
- ⚡ RESTful backend with Express.js
- 🎨 Responsive UI built with React & Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Axios
- face-api.js

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit

---

## 📂 Project Structure

```
moody-player/
│
├── backend/
│   ├── src/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/iharshkaran/moody-player.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## 👨‍💻 Author

**Harsh**