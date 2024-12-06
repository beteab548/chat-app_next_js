import Image from "next/image";
import React from "react";

function Avatar({ image, type, setImage }) {
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
          <div className="relative cursor-pointer z-0">
           <div className="h-60 w-60 absolute ">

           </div>
            <div className="  h-60 w-60">
              <Image src={image} alt="avatar" className=" rounded-full" fill />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Avatar;
