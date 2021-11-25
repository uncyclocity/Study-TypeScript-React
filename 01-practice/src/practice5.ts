// Type Alias

type Human = {
  name: string;
  age?: number;
};

type Developer = Human & {
  skills: string[];
};

// &는 인터섹션이며, 여러 개의 타입을 합쳐줌
type DevHuman = Human & {
  skills: string[];
};

const human: Human = {
  name: "흑괴",
  age: 20,
};

const experthuman: Developer = {
  name: "백괴",
  skills: ["JavaScript", "React"],
};

type Humans = Human[];
const humans: Humans = [human, experthuman];

type Iro = "red" | "orange" | "yellow";
const iro: Iro = "red";
const irotachi: Iro[] = ["red", "orange"];
