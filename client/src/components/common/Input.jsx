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
          className=" bg-green-300 text-start focus:outline-none text-neutral-700"
        />
      </div>
    </div>
  );
}
export default Input;
