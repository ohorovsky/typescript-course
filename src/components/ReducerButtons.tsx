import React, { useReducer, useRef, useContext } from "react";
import { useClickOutside } from "./useClickOutside";
import { GlobalContext } from "./GlobalState";

// type Action = { type: "one" } | { type: "two" };

export const ReducerButtons = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const { rValue, turnOn, turnOff } = useContext(GlobalContext);
  useClickOutside(ref, () => {
    console.log("clicked outside");
  });
  return (
    <div ref={ref}>
      <button onClick={turnOn}>Action 1</button>
      <button onClick={turnOff}>Action 2</button>
      {rValue && <p>visible</p>}
    </div>
  );
};
