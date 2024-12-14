import Image from "next/image";
import React from "react";

function Empty() {
  return (
    <div className=" border-conversation-border border-l w-full  bg-panel-header-background flex flex-col h-[100vh] border-b-4 items-center justify-center border-b-icon-green ">
      <Image
        src={"/telegram-logo.gif"}
        alt="telegram -log"
        width={300}
        height={300}
      />
    </div>
  );
}

export default Empty;
