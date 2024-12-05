import React from "react";
import telegramGif from "../../public/telegram-logo.gif";
import Image from "next/image";
function login() {
  return (
    <div className=" flex  justify-center items-center bg-white flex-col gap-6 h-screen w-screen ">
     <div >
      <Image src={telegramGif} height={300} width={100} />

     </div>
    </div>
  );
}

export default login;
