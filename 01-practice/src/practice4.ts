// 일반 객체에서 인터페이스 사용하기

interface Person {
  name: string;

  // age는 Person에서 있으나 마나다.
  age?: number;
}

// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

// Developer의 일부 속성이 Person과 겹치기 떄문에, 겹치는 속성을 지우고 Person을 상속받음
interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: "흑괴",
  age: 20,
};

const expert: Developer = {
  name: "백괴",
  skills: ["JavaScript", "React"],
};

// expert의 인터페이스인 Developer도 Person을 상속 받으므로, Person만 들어가는 배열에 들어갈 수 있다.
const people: Person[] = [person, expert];
