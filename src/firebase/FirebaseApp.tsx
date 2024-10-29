// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ramelax-36114.firebaseapp.com",
  projectId: "ramelax-36114",
  storageBucket: "ramelax-36114.appspot.com",
  messagingSenderId: "147230993678",
  appId: "1:147230993678:web:f6ff255c9b58e5c8a3bb5f",
  measurementId: "G-QM41NNDRK7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
