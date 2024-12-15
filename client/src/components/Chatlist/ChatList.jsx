import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";
import { useStateprovider } from "@/context/StateContext";
import ContactsList from "./ContactsList";

function ChatList() {
  const { state } = useStateprovider();
  const [pageType, setpageType] = useState("default");
  useEffect(() => {
    if (state.contactPage) {
      setpageType("all-contacts");
    } else {
      setpageType("default");
    }
  }, [state.contactPage]);
  return (
    <div className="bg-panel-header-background flex flex-col max-h-screen z-20 ">
      {pageType === "default" && (
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
      )}
      {pageType === "all-contacts" && <ContactsList />}
    </div>
  );
}

export default ChatList;
