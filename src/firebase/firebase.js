import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVmIfmfjtiloazgCc7IPNux8qaecONq_4",
  authDomain: "nmt-505.firebaseapp.com",
  projectId: "nmt-505",
  storageBucket: "nmt-505.firebasestorage.app",
  messagingSenderId: "178893033721",
  appId: "1:178893033721:web:cd7cab6c911c0997cc9228",
};

const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);

// Google Sign In
export const googleProvider = new GoogleAuthProvider();

export default app;