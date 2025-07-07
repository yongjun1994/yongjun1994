const set = new Set([1, 2, 2, 2, 3, 4]); // 생성자 호출
set.add(5); // 값 추가
set.add(5); // 중복된 값은 추가되지 않음
set.delete(2); // 값 삭제
console.log(set);

const map = new Map();
map.set("name", "Lee");
map.set("age", 20);
console.log(map.get("name")); // "Lee"
console.log(map.get("age")); // 20
console.log(map.size); // 2
map.delete("age");
console.log(map);

for (const val of set) {
  console.log(val);
}

for (const [key, val] of map) {
  console.log(key, val);
}



