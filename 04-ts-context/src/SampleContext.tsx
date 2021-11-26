import {
  useReducer,
  Dispatch,
  createContext,
  ReactNode,
  useContext,
} from "react";

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

// 디스패치 함수를 React에서 불러왔으며, 함수의 파라미터로 들어가는 액션들의 타입을 Generic으로 설정함
// 추후 컴포넌트에서 액션을 디스패치 할 때 액션들에 대한 타입 검사를 할 수 있음
type SampleDispatch = Dispatch<Action>;

// 초기화 값은 null이므로, 각 타입과 null이 둘 다 들어갈 수 있도록 한다.
const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

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

// React에서 ReactNode를 불러옴
// 여기서! 타입 부분에 {children: ReactNode} 이거 뭐냐 할수 있지만, 사실 인터페이스였다(!!!)
export default function SampleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export const useSampleState = () => {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
};

export const useSampleDispatch = () => {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
};
