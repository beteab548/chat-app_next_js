import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useStateprovider } from "@/context/StateContext";
import Input from "@/components/common/Input";
import Avatar from "@/components/common/Avatar";
import axios from "axios";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import { reducerCases } from "@/context/constants";
import { useRouter } from "next/router";
function onboarding() {
  const router = useRouter();
  const { state, dispatch } = useStateprovider();
  const [name, setName] = useState(state?.userData?.name || "");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("/default_avatar.png");
  // console.log(state);
  // useEffect(() => {
  //   if (!state.newUser && state.userData?.email) {
  //     router.push("/");
  //   } else if (!state.newUser && !state.userData?.email) {
  //     router.push("/login");
  //   }
  // }, [router, state.newUser, state.userData]);
  async function onBoardHandler() {
    if (validateDetails()) {
      const email = state?.userData?.email || "endoumamure@gmail.com";
      try {
        const { data } = await axios.post(ONBOARD_USER_ROUTE, {
          email,
          name,
          bio,
          image,
        });
        console.log(data);
        if (data.status) {
          dispatch({ type: reducerCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: reducerCases.SET_USER_INFO,
            userData: { name, email, profileImage: image, status: bio },
          });
          router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  const validateDetails = () => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };
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
          <div className="flex items justify-center">
            <button
              className="flex gap-4 items-center justify-center bg-slate-200 w-64 h-12 hover:bg-slate-300"
              onClick={onBoardHandler}
            >
              Create Profile
            </button>
          </div>
        </div>

        <div>
          <Avatar type={"xl"} image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
