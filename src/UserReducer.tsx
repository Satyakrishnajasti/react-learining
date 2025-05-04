import React, { useReducer } from "react";

export interface InitialState {
  name: string;
}

const initialState: InitialState = {
  name: "",
};

type action = { type: "addUser"; addUser: string };

function reducer(state: InitialState, action: action): InitialState {
  switch (action.type) {
    case "addUser":
      return { ...state, name: action.addUser };
  }
}

function UserReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addUser(e: React.ChangeEvent<HTMLInputElement>): void {
    dispatch({ type: "addUser", addUser: e.target.value });
  }
  return (
    <>
      <p>{state.name}</p>
      <input type="text" value={state.name} onChange={addUser} />
    </>
  );
}

export default UserReducer;
