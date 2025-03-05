// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, sendPasswordResetEmail } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADpSAFEP2LTJNnDpQFGe0cDTgiT8KP5ks",
  authDomain: "movie-8c546.firebaseapp.com",
  projectId: "movie-8c546",
  storageBucket: "movie-8c546.firebasestorage.app",
  messagingSenderId: "1009882032542",
  appId: "1:1009882032542:web:c8d7c52c9f163fee220e8f",
  measurementId: "G-QWVNGN4ERT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail};
export const googleProvider = new GoogleAuthProvider();