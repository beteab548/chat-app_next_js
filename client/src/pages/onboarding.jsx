import Image from "next/image";
import React, { useState } from "react";
import { useStateprovider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import Avatar from "@/components/common/Avatar";
function onboarding() {
  const { state } = useStateprovider();
  const [name, setName] = useState(state?.userData?.name || "");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("/default_avatar.png");
  console.log(state);
  return (
    <div className="flex h-screen w-screen text-black flex-col items-center justify-center ">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={"/telegram-logo.gif"}
          height={300}
          width={100}
          alt="telegram logo"
        />
        <span className="text-7xl">Telegram</span>
      </div>
      <h2 className="text-2xl">Create Your Profile</h2>
      <div className="flex gap-6 mt-6">
        <div
          className="flex
 flex-col items-center justify-center mt-5 gap-6"
        >
          <Input
            name={"display name"}
            state={name}
            setstate={setName}
            lable={true}
          />
          <Input name={"bio"} state={bio} setstate={setBio} lable={true} />
        </div>
        <div>
          <Avatar type={"xl"} image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
