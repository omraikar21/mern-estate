// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e9904.firebaseapp.com",
  projectId: "mern-estate-e9904",
  storageBucket: "mern-estate-e9904.appspot.com",
  messagingSenderId: "725499143437",
  appId: "1:725499143437:web:7c28d85b1e6b8dda6f7c44"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);