import { useReducer } from "react";

export interface InitialState {
  counter: number;
}

const initialState: InitialState = {
  counter: 0,
};

export type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };
    case "reset":
      return initialState;
  }
}

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: "increment" });
  };

  return (
    <>
      <div>
        <p>{state.counter}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default Reducer;
