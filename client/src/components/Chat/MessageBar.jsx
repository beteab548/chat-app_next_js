import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
import axios from "axios";
import { ADD_MESSSAGE_ROUTE } from "@/utils/ApiRoutes";
import { useStateprovider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import EmojiPicker from "emoji-picker-react";
function MessageBar() {
  const [message, setMessage] = useState("");
  const { state, dispatch } = useStateprovider();
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  function handleEmojiModal() {
    setShowEmojiPicker((prev) => {
   return !prev;
    });
    console.log("clicked");
  }
  function handleEmojiClick(emoji) {
    setMessage((prevValue) => {
      return (prevValue += emoji.emoji);
    });
  }
  async function handelMessageSend() {
    console.log(state);
    const { data } = await axios.post(ADD_MESSSAGE_ROUTE, {
      body: {
        from: state?.userData?.id,
        to: state?.currentChatUser?.data?.id,
        message,
      },
    });
    console.log(state?.socket);
    state?.socket?.current?.emit("send-msg", {
      to: state?.currentChatUser?.data?.id,
      from: state?.userData?.id,
      message: data.message,
    });
    dispatch({
      type: reducerCases.ADD_MESSAGE,
      message: { ...data.message },
      fromSelf: true,
    });
    setMessage("");
  }
  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
      <>
        <div className="flex gap-6">
          <BsEmojiSmile
            className="text-panel-header-icon cursor-pointer text-xl"
            title="choose Emoji"
            id="emoji-open"
            onClick={handleEmojiModal}
          />
          {showEmojiPicker && (
            <div className=" absolute bottom-24 left=16 z-40">
              <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
            </div>
          )}

          <ImAttachment
            className="text-panel-header-icon cursor-pointer text-xl"
            title="Attach File"
          />
        </div>
        <div className="w-full rounded-lg h-10 flex items-center">
          <input
            type="text"
            placeholder="type a message"
            className="bg-input-background text-sm focus:outline-none text-white rounded-lg px-5 py-4 w-full"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
        </div>
        <div className="flex w-10 items-center justify-center">
          <button>
            <MdSend
              title="Send"
              className="text-panel-header-icon cursor-pointer text-xl"
              onClick={handelMessageSend}
            />
            {/* <FaMicrophone
              title="record"
              className="text-panel-header-icon cursor-pointer text-xl"
            /> */}
          </button>
        </div>
      </>
    </div>
  );
}

export default MessageBar;
