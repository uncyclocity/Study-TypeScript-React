# 4. TypeScript 와 Context API 활용 시 팁

> _References_ <br> <a href="https://react.vlpt.us/using-typescript/04-ts-context.html">"4. TypeScript 와 Context API 활용하기"</a> _.velopert_

## 📕 주로 배운 내용

- ### 디스패치를 위한 타입 Alias 만들기

  ```typescript
  type Action =
    | { type: "SET_COUNT"; count: number }
    | { type: "SET_TEXT"; text: string }
    | { type: "SET_COLOR"; color: Color }
    | { type: "TOGGLE_GOOD" };

  ...

  type SampleDispatch = Dispatch<Action>;

  // 초기화 값은 null이므로, null 또한 들어갈 수 있도록 지정해준다.
  const SampleDispatchContext = createContext<SampleDispatch, null>(null);
  ```

  - 미리 정의한 `Action` 타입을 인자로 받는 디스패치 함수를 뭉뚱그려서 `SampleDispatch` 타입으로 지정해 주었다.
  - `Dispatch` 함수를 리액트에서 불러올 수 있다.

    ```typescript
    import { Dispatch } from "react";
    ```

- ### `props.children` 불러오기

  ```typescript
  export default function SampleProvider({
    children,
  }: {
    children: ReactNode;
  }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <SampleStateContext.Provider value={state}>
        <SampleDispatchContext.Provider value={dispatch}>
          {children}
        </SampleDispatchContext.Provider>
      </SampleStateContext.Provider>
    );
  }
  ```

  - `children`의 타입인 `ReactNode`를 리액트에서 불러온다.

    ```typescript
    import { ReactNode } from "react";
    ```

  - 타입 부분의 `{children: ReactNode}`는 사실 **인터페이스**이다. <br>
    👉 별도로 인터페이스/타입을 선언하여 사용해도 된다.

    ```typescript
    Interface Children {
      children: ReactNode;
    }

    ...

    export default function SampleProvider({children}: Children) {...}
    ```
