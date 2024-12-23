// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-agency-3530f.firebaseapp.com",
  projectId: "mern-agency-3530f",
  storageBucket: "mern-agency-3530f.firebasestorage.app",
  messagingSenderId: "247864655341",
  appId: "1:247864655341:web:2f19e6cce5303de1583be4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);