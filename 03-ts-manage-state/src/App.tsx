import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import CounterWithReducer from "./CounterWithReducer";
import Main from "./MainPage";
import MyFormMain from "./MyFormMain";
import ReducerSample from "./ReducerSample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/myformmain" element={<MyFormMain />} />
        <Route path="/counterwithreducer" element={<CounterWithReducer />} />
        <Route path="/reducersample" element={<ReducerSample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
