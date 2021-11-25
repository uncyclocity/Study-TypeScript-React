// Generics : 다양한 타입을 넣으면서도 타입 지원을 지켜낼 수 있다.

// 함수 + Generics
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}

const merged = merge({ foo: 1 }, { bar: 2 });

const merged0 = merge({ foo: "hello" }, { bar: "world" });

const merged1 = merge([0, 1], [2, 3]);

// 인터페이스 + Generics
interface ItemsInterface<T> {
  list: T[];
}

const itemsinterface: ItemsInterface<string> = {
  list: ["a", "b", "c"],
};

// 타입 Alias + Generics
type ItemsType<T> = {
  list: T[];
};

const itemstype: ItemsType<string> = {
  list: ["a", "b", "c"],
};
