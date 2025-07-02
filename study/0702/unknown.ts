let value2: unknown = 10;
value2 = "hello"; // OK
// console.log(value);
//  array선언 4가지 방법 : [], Array(), new Array(), new Array(10)
value2 = new Array();
if (value2 instanceof Array) {
  value2.push(33);
}

console.log(value2);
