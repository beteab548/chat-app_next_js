import React from "react";
import Avatar from "../common/Avatar";
import { useStateprovider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";

function ChatLIstItem({ data, inContactPage = false }) {
  const { state, dispatch } = useStateprovider();
  function handleContactClick() {
    console.log("currentChatUser:", state.currentChatUser);
    console.log("data:", data);
    dispatch({ type: reducerCases.SET_CURRENT_CHAT_USER, user: { data } });
    dispatch({ type: reducerCases.SET_ALL_CONTACT_PAGE });
  }
  return (
    <div
      className="flex cursor-pointer items-center hover:bg-background-default-hover"
      onClick={handleContactClick}
    >
      <div className="min-w-fit px-5 pt-3 pb-1">
        <Avatar type="lg" image={data?.profilePicture} />
      </div>
      <div className="min-h-full flex flex-col justify-center mt-3 pr-2 w-full">
        <div className="flex justify-between">
          <div>
            <span className="text-white">{data?.name}</span>
          </div>
        </div>
        <div className="flex border-b border-conversation-border pb-2 pt-2 p3-3">
          <div className="flex justify-between w-full">
            <span className="text-secondary line-clamp-1 text-sm">
              {data?.bio || "\u00A0"}
            </span>
          </div>
        </div>
        {/* \u00A0 is used to subsitue an empty string in to a display to fill in a property if it's absense ruins th UI */}
      </div>
    </div>
  );
}
export default ChatLIstItem;
