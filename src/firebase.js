import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBFb-gJ-i3Ky9y1LzH5hVMnB9kxwOXbPiY",
  authDomain: "ecommerce-side.firebaseapp.com",
  projectId: "ecommerce-side",
  storageBucket: "ecommerce-side.firebasestorage.app",
  messagingSenderId: "1055392885471",
  appId: "1:1055392885471:web:685d0ae94a05200f15176a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
