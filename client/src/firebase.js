// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-75660.firebaseapp.com",
  projectId: "mern-estate-75660",
  storageBucket: "mern-estate-75660.appspot.com",
  messagingSenderId: "554281611758",
  appId: "1:554281611758:web:a5ad7758df2c3017b8deff",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
