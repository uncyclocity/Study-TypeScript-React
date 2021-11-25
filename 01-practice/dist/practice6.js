"use strict";
// Generics : 다양한 타입을 넣으면서도 타입 지원을 지켜낼 수 있다.
function merge(a, b) {
    return Object.assign(Object.assign({}, a), b);
}
const merged = merge({ foo: 1 }, { bar: 2 });
const merged0 = merge({ foo: "hello" }, { bar: "world" });
const merged1 = merge([0, 1], [2, 3]);
const itemsinterface = {
    list: ["a", "b", "c"],
};
const itemstype = {
    list: ["a", "b", "c"],
};
