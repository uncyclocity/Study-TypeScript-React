let count = 0;
count += 1;

// ⬇ 에러
//count = '갑분문자열';

const message: string = "hello world";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

// ⬇ 응안돼
//messages.push(1)

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red";
color = "yellow";

// ⬇ 안된당께라
//color = 'green'
