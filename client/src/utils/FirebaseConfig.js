import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDyEPEbqXETG9GhimjjEpDqnvv8dqQyIjQ",
  authDomain: "telegram-clone-d89e4.firebaseapp.com",
  projectId: "telegram-clone-d89e4",
  storageBucket: "telegram-clone-d89e4.firebasestorage.app",
  messagingSenderId: "814999565137",
  appId: "1:814999565137:web:6dae2f93eb47b118fb5970",
  measurementId: "G-QERPDVWJZ5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
