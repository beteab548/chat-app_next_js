import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
console.log(process.env.REACT_APP_APIKEY);
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  appId: process.env.NEXT_PUBLIC_APPID,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  authDomain: "telegram-clone-d89e4.firebaseapp.com",
  projectId: "telegram-clone-d89e4",
  storageBucket: "telegram-clone-d89e4.firebasestorage.app",
  measurementId: "G-QERPDVWJZ5",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
