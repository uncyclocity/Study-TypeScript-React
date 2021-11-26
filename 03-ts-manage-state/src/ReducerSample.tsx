import { useReducer } from "react";
import { useNavigate } from "react-router";

type Color = "red" | "orange" | "yellow";

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("Unhandled action");
  }
};

const initialState: State = {
  count: 0,
  text: "hello",
  color: "red",
  isGood: true,
};

export default function ReducerSample() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nav = useNavigate();

  return (
    <>
      <p>
        <code>count: </code>
        {state.count}
      </p>
      <p>
        <code>text: </code>
        {state.text}
      </p>
      <p>
        <code>color: </code>
        {state.color}
      </p>
      <p>
        <code>isGood: </code>
        {state.isGood.toString()}
      </p>
      <button onClick={() => dispatch({ type: "SET_COUNT", count: 5 })}>
        SET_COUNT
      </button>
      <button onClick={() => dispatch({ type: "SET_TEXT", text: "bye" })}>
        SET_TEXT
      </button>
      <button onClick={() => dispatch({ type: "SET_COLOR", color: "orange" })}>
        SET_COLOR
      </button>
      <button onClick={() => dispatch({ type: "TOGGLE_GOOD" })}>
        TOGGLE_GOOD
      </button>
      <button onClick={() => nav(-1)}>뒤로</button>
    </>
  );
}
