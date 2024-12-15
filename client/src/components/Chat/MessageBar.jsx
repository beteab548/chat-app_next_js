import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import { FaMicrophone } from "react-icons/fa";
function MessageBar() {
  return (
    <div className="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
      <>
        <div className="flex gap-6">
          <BsEmojiSmile
            className="text-panel-header-icon cursor-pointer text-xl"
            title="choose Emoji"
          />
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
          />
        </div>
        <div className="flex w-10 items-center justify-center">
          <button>
            <MdSend
              title="Send"
              className="text-panel-header-icon cursor-pointer text-xl"
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
