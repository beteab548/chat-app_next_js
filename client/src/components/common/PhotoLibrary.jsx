import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
const images = [
  "/avatars/1.png",
  "/avatars/2.png",
  "/avatars/3.png",
  "/avatars/4.png",
  "/avatars/5.png",
  "/avatars/6.png",
  "/avatars/7.png",
  "/avatars/8.png",
  "/avatars/9.png",
];
function PhotoLibrary({ setImage, setHidePhotoLIbrary }) {
  return (
    <div className="fixed top-0 left-0 max-h-[100vh] max-w[100vh] h-full w-full flex justify-center items-center">
      <div className="h-max w-max gap-6 bg-blue-100 rounded-lg p-4">
        <div
          className="pt-2 pe-2 cursor-pointer flex items-end justify-end"
          onClick={() => {
            setHidePhotoLIbrary(false);
          }}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-16 p-20">
          {images.map((image, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setImage(images[index]);
                  setHidePhotoLIbrary(false);
                }}
              >
                <div className=" relative h-24 w-24 cursor-pointer">
                  <Image
                  fill
                    src={image}
                    alt={`avatar-${index}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PhotoLibrary;
