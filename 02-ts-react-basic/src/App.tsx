import Greetings from "./Greetings";

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  // 함수를 props로 받아 올 경우
  onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수라는 뜻
};

function App() {
  const image: ImageProps = {
    src: "https://media.vlpt.us/images/uncyclocity/post/3472c72d-284f-49b4-82af-f5ccb2fc9645/%EB%A6%AC%EA%B9%8E%EB%85%B8.png",
    alt: "백괴",
    onClick: (name: string) => console.log(`${name} says hello`),
    width: 200,
  };

  return <Greetings name="백괴" image={image} />;
}

export default App;
