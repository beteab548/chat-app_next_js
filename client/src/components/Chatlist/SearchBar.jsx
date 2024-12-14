import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";
function SearchBar() {
  return (
    <div className=" bg-search-input-container-background flex py-3 pl-5 items-center gap-3 h-14 ">
      <div className="bg-panel-header-background flex gap-5 px-3 py-1 rounded-lg flex-grow">
        <div>
          <BiSearchAlt2 className=" text-l cursor-pointer text-panel-header-icon my-1.5" />
        </div>
        <div>
          <input
            type="text"
            placeholder="Search Or Start New Chat "
            className="bg-transparent text-sm focus:outline-none text-white w-full"
          />
        </div>
      </div>
      <div className="pr-5 pl-3">
        <BsFilter />
      </div>
    </div>
  );
}

export default SearchBar;
