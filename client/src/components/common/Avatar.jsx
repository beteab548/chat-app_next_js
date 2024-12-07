import Image from "next/image";
import React, { useState } from "react";
import { FcCamera } from "react-icons/fc";
import ContextMenu from "./ContextMenu";

function Avatar({ image, type, setImage }) {
  const [hover, setHover] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });

  function handleClick(e) {
    e.preventDefault();
    setContextMenuCoordinates({ x: e.pageX, y: e.pageY });
    setShowContextMenu(true);
  }
  const contextOptions = [
    { name: "take a photo", callback: () => {} },
    { name: "choose from preset", callback: () => {} },
    { name: "upload file", callback: () => {} },
    { name: "remove profile", callback: () => {} },
  ];
  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className=" relative h-10 w-10">
            <Image src={image} alt="avatar" className=" rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className=" relative h-14 w-14">
            <Image src={image} alt="avatar" className=" rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            id="contex-menu"
            className="relative cursor-pointer z-0 "
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
            onClick={(e) => {
              handleClick(e);
            }}
          >
            <div
              className={`absolute top-0 left-0 bg-photopicker-overlay-background h-60 w-60 flex flex-col items-center justify-center gap-2 z-[100] ${
                hover ? "visible" : "hidden"
              }`}
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <FcCamera
                id="contex-menu"
                onClick={(e) => {
                  handleClick(e);
                }}
              />
              <span
                id="contex-menu"
                onClick={(e) => {
                  handleClick(e);
                }}
              >
                create <br /> profile <br /> photo
              </span>
            </div>
            <div
              className="  h-60 w-60"
              onClick={(e) => {
                handleClick(e);
              }}
            >
              <Image
                src={image}
                alt="avatar"
                className=" rounded-full"
                fill
                id="contex-menu"
              />
            </div>
          </div>
        )}
      </div>
      {showContextMenu && (
        <ContextMenu
          showContextMenu={showContextMenu}
          setShowContextMenu={setShowContextMenu}
          contextOptions={contextOptions}
          coordinates={contextMenuCoordinates}
        />
      )}
    </>
  );
}

export default Avatar;
