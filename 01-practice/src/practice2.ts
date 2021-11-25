function sum(x: number, y: number): number {
  return x + y;
}

sum(1, 2);

/* Array.prototype.reduce()
- 배열의 각 요소에 대해 주어 진 리듀서 함수를 실행하여 결과값을 반환함
- reducer(누산기, 현재 값, 현재 인덱스, 원본 배열)
- reduce(리듀서 함수, 초기값) */
function sumArr(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArr([1, 2, 3, 4, 5]);
console.log(total);
