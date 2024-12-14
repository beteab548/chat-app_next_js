import React, { useEffect, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/FirebaseConfig";
import { useStateprovider } from "@/context/StateContext";
import axios from "axios";
import { CHECK_USER_AUTH } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { reducerCases } from "@/context/constants";

function Main() {
  //fix the state contexts not being consistent in the context when ever i reaload the page
  const { state, dispatch } = useStateprovider();
  const router = useRouter();
  const [redirectLogin, setRedirectLogin] = useState(false);
  useEffect(() => {
    if (redirectLogin) {
      router.push("/login");
    }
  }, [redirectLogin]);
  onAuthStateChanged(auth, async (currentUser) => {
    if (!currentUser) {
      setRedirectLogin(true);
    }
    if (!state?.userData && currentUser?.email) {
      const { data } = await axios.post(CHECK_USER_AUTH, {
        email: currentUser.email,
      });
      if (!data.status) {
        router.push("/login");
      }
      dispatch({ type: reducerCases.SET_NEW_USER, userData: data.data });
    }
  });
  return (
    <>
      <div className="grid grid-cols-main w-screen h-screen max-h-screen max-width-screen">
        <ChatList />
        <Empty />
      </div>
    </>
  );
}

export default Main;
