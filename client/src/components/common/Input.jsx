import React from "react";

function Input({ name, state, setstate, lable = false }) {
  return (
    <div className="flex gap-1 flex-col">
      {lable && (
        <label htmlFor={name} className=" text-green-950 text-lg px-1">
          {name}
        </label>
      )}
      <div>
        <input
          type="text"
          name={name}
          value={state}
          onChange={(e) => setstate(e.target.value)}
          className="flex items-center justify-center bg-slate-200 w-56 h-10 "
        />
      </div>
    </div>
  );
}
export default Input;
