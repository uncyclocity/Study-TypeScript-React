import { useState } from "react";
import { useNavigate } from "react-router";

export default function Counter() {
  // Generic을 통해 state가 어떤 타입을 가질 지 명시만 해주면 된다.
  // 사실 안해도 좋으나, 상태가 null을 가질 수도 있을 때 <number|null> 이런 식으로 사용하는게 좋다.
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);
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
