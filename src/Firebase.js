// Firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWikV09CYJz4H8gNEuz-TS-34SQaw5J8o",
  authDomain: "netflix-clone--experience.firebaseapp.com",
  projectId: "netflix-clone--experience",
  storageBucket: "netflix-clone--experience.appspot.com",
  messagingSenderId: "577698753048",
  appId: "1:577698753048:web:8a117942e60e07ab41316d",
  measurementId: "G-SZNQV8MQ4E",
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Auth
const auth = getAuth(firebaseApp);

// Export both auth (named export) and db (default export)
export { auth };
export default db;
