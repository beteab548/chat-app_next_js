import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FcCamera } from "react-icons/fc";
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";
function Avatar({ image, type, setImage }) {
  const [hover, setHover] = useState(false);
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });
  const [grabphoto, setgrabPhoto] = useState(false);
  const [showCapturePhoto, setShowCapturePhoto] = useState(false);
  const [showPhotoLibrary, setShowPhotoLibrary] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setContextMenuCoordinates({ x: e.pageX, y: e.pageY });
    setShowContextMenu(true);
  }
  function handleImageChange(e) {
    console.log("file upload excuted");
    const file = e.target.files[0];
    const reader = new FileReader();
    const data = document.createElement("img");
    reader.onload = function (event) {
      data.src = event.target.result;
      data.setAttribute("data-src", event.target.result);
    };
    reader.readAsDataURL(file);
    setTimeout(() => {
      console.log(data.src);
      setImage(data.src);
    }, 100);
  }
  const contextOptions = [
    {
      name: "take a photo",
      callback: () => {
        setShowCapturePhoto(true);
      },
    },
    {
      name: "choose from preset",
      callback: () => {
        setShowPhotoLibrary(true);
      },
    },
    {
      name: "upload file",
      callback: () => {
        setgrabPhoto(true);
      },
    },
    {
      name: "remove profile",
      callback: () => {
        setImage("/default_avatar.png");
      },
    },
  ];
  useEffect(() => {
    if (grabphoto) {
      const data = document.getElementById("photo-picker");
      data.click();
      document.body.onfocus = (e) => {
        setTimeout(() => {
          setgrabPhoto(false);
        }, 1000);
      };
    }
  }, [grabphoto]);
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
              id="contex-menu"
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
                className=" rounded-full "
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
      {showCapturePhoto && <CapturePhoto  setimage={setImage} hide={setShowCapturePhoto}/>}
      {showPhotoLibrary && (
        <PhotoLibrary
          setImage={setImage}
          setHidePhotoLIbrary={setShowPhotoLibrary}
        />
      )}
      {grabphoto && <PhotoPicker onchange={handleImageChange} />}
    </>
  );
}
export default Avatar;
