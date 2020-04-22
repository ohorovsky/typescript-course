import React, { useReducer } from "react";

const initialState = { rValue: true };

type State = {
  rValue: boolean;
};
type Action = {
  type: string;
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "one":
      return { rValue: true };
    case "two":
      return { rValue: false };
    default:
      return state;
  }
}

export const ReducerButtons = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "one" })}>Action 1</button>
      <button onClick={() => dispatch({ type: "two" })}>Action 2</button>
      {state?.rValue && <p>visible</p>}
    </div>
  );
};
