import { useReducer, useEffect } from "react";

export interface InitialState {
  loading: boolean;
  data: any;
  error: string;
}

const FETCH_INIT = "FETCH_INIT";
const FETCH_START = "FETCH_START";
const FETCH_ERROR = "FETCH_ERROR";

export type Action =
  | { type: "FETCH_INIT"; payload: any }
  | { type: "FETCH_START" }
  | { type: "FETCH_ERROR" };

const initialSte = {
  loading: false,
  data: null,
  error: null,
};

const dataReducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_START:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function MultiState() {
  const [state, dispatch] = useReducer(dataReducer, initialSte);
  const dataHandler = async () => {
    try {
      dispatch({ type: FETCH_INIT });
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const newData = await response.json();
      dispatch({ type: FETCH_START, payload: newData });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error });
    }
  };

  useEffect(() => {
    dataHandler();
    if (state.error) {
      alert(state.error);
    }
  }, []);
  return (
    <div>
      {state.loading && <p>loading</p>}
      {state.data && (
        <div>
          {state.data.map((item: any) => {
            return <div>{item.title}</div>;
          })}
        </div>
      )}
      {state.error && <div>(state.error)</div>}
    </div>
  );
}

export default MultiState;
