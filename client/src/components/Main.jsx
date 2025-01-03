import React, { useEffect, useRef, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/utils/FirebaseConfig";
import { useStateprovider } from "@/context/StateContext";
import axios from "axios";
import {
  baseUrl,
  CHECK_USER_AUTH,
  GET_MESSAGES_ROUTE,
} from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { reducerCases } from "@/context/constants";
import Chat from "./Chat/Chat";
import Empty from "./Empty";
import { io } from "socket.io-client";
function Main() {
  //fix the state contexts not being consistent in the context when ever i reaload the page
  const { state, dispatch } = useStateprovider();
  const router = useRouter();
  const socket = useRef();
  const [redirectLogin, setRedirectLogin] = useState(false);
  const [socketEvent, setSocketEvent] = useState(false);
  
  useEffect(() => {
    if (redirectLogin) {
      router.push("/login");
    }
  }, [redirectLogin]);
  //write the redirect logic here to redirec to the login page if the userData is not present
  useEffect(() => {
    if (state?.userData) {
      socket.current = io(baseUrl);
      socket.current.emit("add-user", state?.userData?.id);
      dispatch({ type: reducerCases.SET_SOCKET, socket });
    }
  }, [state?.userData]);

  console.log('socket.current:',socket.current);
  useEffect(() => {
    console.log('socketevent:',socketEvent);
    if (socket.current && !socketEvent) {
      console.log("in the socket...");
      socket.current.on("msg-recieve", (data) => {
        dispatch({
          type: reducerCases.ADD_MESSAGE,
          newMessage: { ...data.message },
        });
      });
    }
    setSocketEvent(true);
  }, [socket?.current]);
  useEffect(() => {
    console.log(state);
    const getMessages = async () => {
      const {
        data: { messages },
      } = await axios.get(
        `${GET_MESSAGES_ROUTE}/${state?.userData?.id}/${state?.currentChatUser?.data?.id}`
      );
      dispatch({ type: reducerCases.SET_MESSAGES, messages });
    };
    if (state?.currentChatUser) {
      getMessages();
    }
  }, [state?.messages]);
  // onAuthStateChanged(auth, async (currentUser) => {
  //   if (!currentUser) {
  //     setRedirectLogin(true);
  //   }
  //   if (!state?.userData && currentUser?.email) {
  //     const { data } = await axios.post(CHECK_USER_AUTH, {
  //       email: currentUser.email,
  //     });
  //     if (!data.status) {
  //       router.push("/login");
  //     }
  //     dispatch({ type: reducerCases.SET_NEW_USER, userData: data.data });
  //   }
  // });
  return (
    <>
      <div className="grid grid-cols-main w-screen h-screen max-h-screen max-width-screen">
        <ChatList />
        {state?.currentChatUser ? <Chat /> : <Empty />}
        {/* this is where if their is no user selected the chat container displays the Empty component*/}
      </div>
    </>
  );
}

export default Main;
