import { reducerCases } from "@/context/constants";
import { useStateprovider } from "@/context/StateContext";
import { GET_ALL_CONTACTS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatLIstItem from "./ChatLIstItem";

function ContactsList() {
  const { state, dispatch } = useStateprovider();
  const [allContacts, setAllContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const {
          data: { users },
        } = await axios.get(GET_ALL_CONTACTS);
        setAllContacts(users);
      } catch (err) {
        console.log(err);
      }
    };
    getContacts();
  }, []);
  function handelClick() {
    dispatch({ type: reducerCases.SET_ALL_CONTACT_PAGE });
  }
  return (
    <div className="h-full flex flex-col">
      <div className="h-24 flex items-end px-3 py-4">
        <div className="flex items-center gap-12 text-white">
          <BiArrowBack
            className="cursor-pointer text-xl"
            onClick={handelClick}
          />
          <span>New Chat</span>
        </div>
      </div>
      <div className="bg-search-input-container-background h-full flex-auto overflow-auto custom-scrollbar ">
        <div className="flex py-3 items-center gap-3 h-14">
          <div className=" bg-panel-header-background mx-2  flex gap-5 px-3 py-1 rounded-lg flex-grow">
            <div>
              <BiSearchAlt2 className=" text-l cursor-pointer text-panel-header-icon my-1.5" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search Contacts "
                className="bg-transparent text-sm focus:outline-none text-white w-full"
              />
            </div>
          </div>
        </div>
        {Object.entries(allContacts).map(([initaialLetters, userLists]) => {
          return (
            <div key={Date.now() + initaialLetters}>
              <div className="text-teal-light pl-10 py-5">
                {initaialLetters}
              </div>
              {userLists.map((contacts) => {
                return (
                  <ChatLIstItem
                    data={contacts}
                    incontactPage={true}
                    key={contacts.id}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ContactsList;
