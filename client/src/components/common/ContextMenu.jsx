import React, { useEffect, useRef } from "react";

function ContextMenu({
  contextOptions,
  coordinates,
  setShowContextMenu,
  showContextMenu,
}) {
  useEffect(() => {
    function handleOutSideClick(e) {
      if (e.target.id !== "contex-menu") {
        if (
          contextMenuRef.current &&
          !contextMenuRef.current.contains(e.target)
        ) {
          setShowContextMenu(false);
        }
      }
    }
    document.addEventListener("click", handleOutSideClick);
    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, []);
  const contextMenuRef = useRef(null);
  function handelClick(e, callback) {
    e.stopPropagation();
    callback();
    setShowContextMenu(false);
  }
  return (
    <div
      ref={contextMenuRef}
      className=" py-2  fixed z-[100] shadow-x1 bg-green-300 "
      style={{ top: coordinates.y, left: coordinates.x }}
    >
      <ul>
        {contextOptions.map(({ name, callback }) => {
          return (
            <li
              key={name}
              className="py-2 px-4 bg-green-300 hover:bg-green-400 cursor-pointer"
              onClick={(e) => {
                handelClick(e, callback);
              }}
            >
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ContextMenu;
