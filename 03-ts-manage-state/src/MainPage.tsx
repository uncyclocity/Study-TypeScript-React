import { useNavigate } from "react-router";

export default function Main() {
  const nav = useNavigate();

  return (
    <>
      <button onClick={() => nav("/counter")}>Counter()</button>
      <button onClick={() => nav("/myformmain")}>MyForm()</button>
      <button onClick={() => nav("/counterwithreducer")}>
        CounterWithReducer()
      </button>
      <button onClick={() => nav("/reducersample")}>ReducerSample()</button>
    </>
  );
}
