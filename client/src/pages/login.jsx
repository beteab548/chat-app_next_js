import React from "react";
import { FcGoogle } from "react-icons/fc";
import telegramGif from "../../public/telegram-logo.gif";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/utils/FirebaseConfig";
function login() {
  async function login() {
    const porvider = new GoogleAuthProvider();
    const {
      user: { displayName: name, photoURL: profileImage, email },
    } = await signInWithPopup(auth, porvider);
    try {
      if (user) {
        //write the logic to check if the user is existing in the database
      }
    } catch (err) {
      console.log(err);
    }
    console.log(email); // 32:10 this is where i check for the authenticty of the user by using a popup menu check the console when wifi is available
  }
  return (
    <div className=" flex  justify-center items-center bg-white flex-col gap-6 h-screen w-screen ">
      <div className="flex items-center gap-2">
        <Image src={telegramGif} height={300} width={200} />
        <p className=" text-7xl text-cyan-500">Telegram</p>
      </div>
      <button
        className="flex gap-4 items-center justify-center bg-slate-200 w-64 h-12 "
        onClick={login}
      >
        <FcGoogle />
        <span className=" text-cyan-500">Login With Google</span>
      </button>
    </div>
  );
}

export default login;
