// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-b8e66.firebaseapp.com",
  projectId: "mern-auth-b8e66",
  storageBucket: "mern-auth-b8e66.appspot.com",
  messagingSenderId: "247337984643",
  appId: "1:247337984643:web:045f9f9bd78a5bf98871b6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);