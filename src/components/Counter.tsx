import { useReducer } from "react";

const initialState = { 
    count: 0 
};

type ACTIONTYPE = | { type: "increment"; payload: number } | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
    switch (action.type) {
      case "increment":
        return { count: state.count + action.payload };
      case "decrement":
        return { count: state.count - Number(action.payload) };
      default:
        throw new Error();
    }
  }

type Props = {}

function Counter({}: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
      <>
        Count: {state.count}
        <br />
        <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
          decrease
        </button>
        <button onClick={() => dispatch({ type: "increment", payload: 2 })}>
          increase
        </button>
      </>
    );
}

export default Counter