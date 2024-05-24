// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f1c69.firebaseapp.com",
  projectId: "mern-blog-f1c69",
  storageBucket: "mern-blog-f1c69.appspot.com",
  messagingSenderId: "941753041606",
  appId: "1:941753041606:web:f5d523363ec345f633cdc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
