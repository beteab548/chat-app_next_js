import React from "react";
import Avatar from "../common/Avatar";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { useStateprovider } from "@/context/StateContext";

function ChatListHeader() {
  const { state, dispatch } = useStateprovider();
  console.log(state);
  return (
    <div className="h-16 px-4 py-3 flex justify-between items-center">
      <div className="cursor-pointer">
        <Avatar type={"sm"} image={state?.userData?.profileImage} />
      </div>
      <div className="flex gap-6">
        <BsFillChatLeftTextFill
          title="new chat"
          className=" cursor-pointer text-panel-header-icon"
        />
        <>
          <BsThreeDotsVertical
            title="menu"
            className=" cursor-pointer text-panel-header-icon"
          />
        </>
      </div>
    </div>
  );
}

export default ChatListHeader;
