// 고차 배열 메서드
const nums = [1, 2, 3, 4, 5];

// map: 배열의 각 요소에 대해 함수를 실행하고, 그 결과로 새로운 배열을 생성
const squares = nums.map((n) => n ** 2);

for (const val of squares) {
  console.log(`val => ${val}`); 
}

for (let i = 0; i < nums.length; i++) {
  console.log(`nums[${i}] => ${nums[i]}, squares[${i}] => ${squares[i]}`);
}

// filter
const evens = nums.filter(n => n % 2 === 0);

for (const val of evens) {
  console.log(`val => ${val}`);
}

// reduce: 배열의 모든 요소를 하나의 값으로 축소
// const sum = nums.reduce((acc, cur) => {
//   acc += cur;
//   console.log(`acc => ${acc}, cur => ${cur}`); // 현재 누산된 값, 현재 값
//   return acc; // 누산된 값을 반환
// }, 0);
const sum = nums.reduce((acc, cur) => acc + cur, 0); // 축약한 형태
console.log(`sum => ${sum}`);

// find: 조건을 만족하는 첫 번째 요소를 반환
const found = nums.find((n => n > 2));
console.log(`found => ${found}`);

