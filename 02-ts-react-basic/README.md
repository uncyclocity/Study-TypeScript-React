# 2. 리액트 컴포넌트 타입스크립트로 작성하기

> _References_ <br> <a href="https://react.vlpt.us/using-typescript/02-ts-react-basic.html">"2. 리액트 컴포넌트 타입스크립트로 작성하기"</a> _.velopert_ <br> <a href="https://www.kenrhee.com/blog/getting-started-with-typescript-with-react">"Typescript + React 시작하기"</a> _.kenrhee_

## 📕 주로 배운 내용

- ### CRA 프로젝트 생성

  - **CRA**를 통해 프로젝트를 생성할 경우 손쉽게 타입스크립트를 추가할 수 있다.

    ```bash
    $ npx create-react-app my-app --template typescript
    ```

- ### 함수형 컴포넌트 작성 방법

  - 컴포넌트의 **Props**를 명시하여 작성한다.
    👉 컴포넌트를 작성할 때 필요한 Props 속성을 빠뜨릴 경우, 에디터에 오류가 나타난다.

    ```typescript
    type Image = {
      src: string;
      alt: string;

      //있어도 되고 없어도 되는 속성
      width?: number;

      // 함수를 속성으로 받을 경우
      onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수라는 뜻
    };

    type GreetingProps = {
      name: string;
      mark: string;
      image?: Image;
    };

    const Greetings = ({ name, mark, image }: GreetingProps) => {
      return (
        <>
          Hello {name} {mark}
          {image && (
            <image
              src={image.src}
              alt={image.alt}
              width={image.width ? `${image.width}px` : "100px"}
              onClick={image.onClick(name)}
            />
          )}
        </>
      );
    };
    ```

  - `React.FC`로 함수형 컴포넌트를 작성할 수도 있으나, 여러 불편한 점이 있기에 추천되지 않는다.
    - `children`이 props에 기본적으로 들어가기에 props의 타입을 명확히 할 수 없다.
    - `defaultProps`가 정상적으로 작동하지 않는다.
