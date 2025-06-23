// alert("Hello World");
// console.log("Hello World");
// document.write("<h1>Document Write</h1>");

// let currentYear = 2025;
// let birthYear = prompt("태어난 연도를 입력하세요:");
// let age = currentYear - birthYear;
// alert("당신의 나이는 " + age + "살 입니다.");

// let name = "철수";
// let age = 20;
// let isStudent = true;

// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof isStudent); // boolean

// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;

// console.log("할인된 가격은  " + finalPrice + "원");

// let name = "영희";
// console.log(`안녕하세요, ${name}님!`);
// console.log("안녕하세요, " + name + "님!");

// let a = 10;
// console.log(a);
// a += 5;
// console.log(a);
// a -= 3;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 4;
// console.log(a);
// console.log(`최종 값은 ${a}입니다.`);

// // 1. 이름과 나이를 입력받아 인사말 출력하기
// let userName = prompt("이름을 입력하세요:");
// let userAge = prompt("나이를 입력하세요:");
// console.log(`안녕하세요, ${userName}님! 당신의 나이는 ${userAge}살 입니다.`);

// // 2. 두 수를 입력받아 사칙연산 결과를 각각 출력하기
// // parseFloat를 사용하여 문자열을 숫자로 변환
// // prompt로 입력받은 값은 문자열이므로, 숫자로 변환해야 합니다.
// let num1 = parseFloat(prompt("첫 번째 숫자를 입력하세요:"));
// let num2 = parseFloat(prompt("두 번째 숫자를 입력하세요:"));
// console.log(`덧셈: ${num1 + num2}`);
// console.log(`뺄셈: ${num1 - num2}`);
// console.log(`곱셈: ${num1 * num2}`);
// console.log(`나눗셈: ${num1 / num2}`);

// // . == vs === 비교 실험하기
// let num3 = parseFloat(prompt("첫 번째 숫자를 입력하세요:"));
// let num4 = parseFloat(prompt("두 번째 숫자를 입력하세요:"));
// console.log(`num3 == num4: ${num3 == num4}`); // 값만 비교
// console.log(`num3 === num4: ${num3 === num4}`); // 값과 타입을 비교

// // 실습: 3의 배수 검사기
// let num = prompt("숫자를 입력하세요:");
// if (num % 3 === 0) {
//     console.log(`${num}은(는) 3의 배수입니다.`);
// } else {
//   alert(`${num}은(는) 3의 배수가 아닙니다.`);
// }

// let day = prompt("요일을 입력하세요");
// switch (day) {
//   case "월요일":
//     alert("한 주의 시작!");
//     break;
//   case "금요일":
//     alert("불타는 금요일");
//     break;
//   default:
//     alert("평범한 하루네요.");
// }

// 숫자 2개를 변수로 저장하고 더한 결과를 출력
let a = 5;
let b = 3;
// let sum = a + b;
// console.log(`두 숫자의 합은 ${sum}입니다.`);
alert(a + b); // alert로 결과 출력

// 이름과 나이를 저장하고 다음과 같은 문장을 출력
// "홍길동님은 20살입니다."
let name = "홍길동";
let age = 20;
// console.log(`${name}님은 ${age}살입니다.`);
alert(`${name}님은 ${age}살입니다.`); // alert로 결과 출력

// 정사각형의 한 변 길이를 변수로 저장하고 넓이 출력
let side = 4;
// 정사각형의 넓이는 한 변의 길이를 제곱한 값입니다.
let area = side * side;
console.log(`정사각형의 넓이는 ${area}입니다.`);

// 4. 숫자 하나가 짝수인지 홀수인지 출력
let number = 7;
if (number % 2 === 0){
  // console.log("짝수입니다.");
  alert("짝수입니다."); // alert로 결과 출력
} else {
  // console.log("홀수입니다.");
  alert("홀수입니다."); // alert로 결과 출력
}

// 5. 나이에 따라 아래 문장 출력

let userAge = 16;
if (userAge < 19) {
  // console.log("미성년자입니다.");
  alert("미성년자입니다."); // alert로 결과 출력
} else {
  // console.log("성인입니다.");
  alert("성인입니다."); 
}

// 6. 비밀번호가 맞는지 확인하는 코드 

let password = "1234";
let input = "1234"; // 이 값이 같으면 "로그인 성공", 아니면 "로그인 실패" 출력
// let input = prompt("비밀번호를 입력하세요:"); // 사용자로부터 비밀번호 입력 받기
if(password === input) {
  // console.log("로그인 성공");
  alert("로그인 성공"); // alert로 결과 출력
} else {
  // console.log("로그인 실패");
  alert("로그인 실패"); // alert로 결과 출력
}