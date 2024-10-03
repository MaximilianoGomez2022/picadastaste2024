// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3K_3UvNRax7gK4eJ80SM7ZK9nKvIf00w",
  authDomain: "taste2024-e0216.firebaseapp.com",
  projectId: "taste2024-e0216",
  storageBucket: "taste2024-e0216.appspot.com",
  messagingSenderId: "870481979643",
  appId: "1:870481979643:web:5eef24dfe742b3d717a85e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export { db };