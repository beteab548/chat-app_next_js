import { useStateprovider } from "@/context/StateContext";
import React from "react";

function ChatContainer() {
  const { state } = useStateprovider();
  return (
    <div className="h-[80hv] w-full realtive flex-grow overflow-auto custom-scrollbar">
      <div className="bg-chat-background bg-fixed h-full w-full opacity-5 fixed left-0 top-0 z-0"></div>
      <div className="flex w-full">
        <div className="flex flex-col justify-end w-full gap-1 overflow-auto ">
          {state?.messages?.map((message, index) => {
            return (
              <div
                key={message.id}
                className={`${
                  message.senderId === state?.currentChatUser?.data?.id
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                {message.type === "text" && (
                  <div
                    className={`text-white px-2 -y-[5px] text-sm rounded-md flex gap-2 items-end max-2[45%] ${
                      message.senderId === state?.currentChatUser?.data.id
                        ? "bg-incoming-background"
                        : "bg-outgoing-background"
                    }`}
                  >
                    <span className="break-all">{message.message}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
