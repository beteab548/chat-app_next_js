import Image from "next/image";
import React from "react";

function onboarding() {
  return (
    <div className="flex h-screen w-screen text-black flex-col items-center justify-center ">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={"/telegram-logo.gif"}
          height={300}
          width={100}
          alt="telegram logo"
        />
        <span className="text-7xl">Telegram</span>
      </div>
      <h2 className="text-2xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div
          className="flex
 flex-col items-center justify-center mt-5 gap-6"
        ></div>
      </div>
    </div>
  );
}

export default onboarding;
