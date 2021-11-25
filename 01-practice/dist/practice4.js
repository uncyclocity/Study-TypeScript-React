"use strict";
// 일반 객체에서 인터페이스 사용하기
const person = {
    name: "흑괴",
    age: 20,
};
const expert = {
    name: "백괴",
    skills: ["JavaScript", "React"],
};
// expert의 인터페이스인 Developer도 Person을 상속 받으므로, Person만 들어가는 배열에 들어갈 수 있다.
const people = [person, expert];
