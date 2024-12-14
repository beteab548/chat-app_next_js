import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
function CapturePhoto({ setImage, hide }) {
  const videoRef = useRef(null);
  useEffect(() => {
    async function startCamera() {
      let stream;
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;
    }
    startCamera();
    return () => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    };
  }, []);
  function CapturePhoto() {}
  return (
    <div className="absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-green-200 gap-3 rounded-lg pt-2 flex items-center justify-center">
      <div className="flex flex-col gap-4 w-full ">
        <div
          className="pt-2 pr-2 cursor-pointer flex items-end justify-end"
          onClick={() => {
            hide(false);
          }}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="flex justify-center">
          <video id="video" width={400} autoPlay ref={videoRef}></video>
        </div>
        <button
          onClick={CapturePhoto}
          className="h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light"
        ></button>
      </div>
    </div>
  );
}

export default CapturePhoto;
