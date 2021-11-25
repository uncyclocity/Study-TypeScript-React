"use strict";
// 클래스에 인터페이스 사용하기
// `implements` 키워드를 통해 해당 클래스가 Shape Interface의 조건을 충족하겠다고 명시함
class Circle {
    // 멤버 변수 radius의 값을 설정함
    // radius: number;
    // constructor(radius: number) {
    //   this.radius = radius;
    // }
    // 접근자를 추가하면 생성자 밖에서의 별도의 선언 과정을 생략할 수 있다.
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}
class Rectangle {
    // width: number;
    // height: number;
    // constructor(width: number, height: number) {
    //   this.width = width;
    //   this.height = height;
    // }
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
