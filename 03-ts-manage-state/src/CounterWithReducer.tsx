import { useReducer } from "react";
import { useNavigate } from "react-router";

// 리듀서 액션 인자로 들어갈 수 있는 객체를 지정
type Action = { type: "INCREASE" } | { type: "DECREASE" };

const reducer = (state: number, action: Action): number => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled Action");
  }
};

export default function CounterWithReducer() {
  const [count, dispatch] = useReducer(reducer, 0);
  const onIncrease = () => dispatch({ type: "INCREASE" });
  const onDecrease = () => dispatch({ type: "DECREASE" });
  const nav = useNavigate();

  return (
    <>
      <div>{count}</div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => nav(-1)}>뒤로</button>
    </>
  );
}
