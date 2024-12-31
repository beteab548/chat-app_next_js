import React from "react";
import { FcGoogle } from "react-icons/fc";
import telegramGif from "../../public/telegram-logo.gif";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_AUTH } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateprovider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
function login() {
  const router = useRouter();
  const { dispatch } = useStateprovider();
  async function login() {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    const userData = {
      name: user.displayName,
      email: user.email,
      profileImage: user.photoURL,
    };
    try {
      if (userData) {
        const { data } = await axios.post(CHECK_USER_AUTH, {
          email: userData.email,
          name: userData.name,
        });
        //this is where i dispatch the action and set the globalstate userData to the userData i authenticated
        dispatch({ type: reducerCases.SET_NEW_USER, newUser: true });
        dispatch({ type: reducerCases.SET_USER_INFO, userData });
        if (data.status) {
          router.push("/onboarding");
        } else {
          router.push("/login");
        }
      }
    } catch (err) {
      console.log(err);
    }
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
