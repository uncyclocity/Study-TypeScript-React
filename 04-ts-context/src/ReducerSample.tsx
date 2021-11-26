import { useSampleDispatch, useSampleState } from "./SampleContext";

export default function ReducerSample() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

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
    </>
  );
}
