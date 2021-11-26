type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  // 함수를 props로 받아 올 경우
  onClick: (name: string) => void; // 아무것도 리턴하지 않는 함수라는 뜻
};

type GreetingsProps = {
  name: string;
  mark: string;
  // 있어도 되고 없어도 되는 props
  image?: ImageProps;
};

const Greetings = ({ name, mark, image }: GreetingsProps) => {
  return (
    <>
      Hello {name}
      {mark}
      {image && (
        <div>
          <img
            src={image.src}
            alt={image.alt}
            width={image.width ? image.width + "px" : "100px"}
            onClick={() => image.onClick(name)}
          />
        </div>
      )}
    </>
  );
};

// React.FC로 함수형 컴포넌트를 짤 경우, 이를 사용할 수 없다.
Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
