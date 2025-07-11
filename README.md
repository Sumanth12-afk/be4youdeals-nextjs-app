# be4youdeals-nextjs-app

A modern affiliate product deals website built using **Next.js**, **Tailwind CSS**, and **Firebase**. This project showcases category-based affiliate deals with a beautiful slideshow, secure authentication, and responsive design ready for deployment on **Netlify** or **Vercel**.

## 🚀 Features

- 🔥 **Next.js** for fast performance and routing
- 🎨 **Tailwind CSS** for beautiful and responsive UI
- 🔐 **Firebase Auth** with Google, Phone OTP, and Email login
- 🖼️ Dynamic product slideshow (Swiper.js)
- 📁 Category-based pages: Laptops, Headphones, Mobiles, Household
- 🍞 Toast notifications for feedback
- ✅ Route protection and logout
- 🌈 Pastel color palette
- ☁️ Deployment ready for Netlify or Vercel

## 📦 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS, Swiper.js
- **Auth:** Firebase Authentication
- **Deployment:** Netlify or Vercel

## 🔧 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/be4youdeals-nextjs-app.git
cd be4youdeals-nextjs-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Firebase

Create a `lib/firebase.ts` file and paste your Firebase config:

```ts
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
export { firebase, auth };
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Deploy to Netlify (or Vercel)

- Push your code to GitHub
- Connect the repo on Netlify or Vercel
- Use default build command: `npm run build`
- Publish directory: `.next` (Netlify handles this automatically)

## 🧪 Preview

Visit: `http://localhost:3000`

## 📄 License

This project is licensed under the MIT License.