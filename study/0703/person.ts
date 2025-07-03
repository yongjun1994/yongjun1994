class Person {
  name: string;
  age: number;

  introduce() {
    console.log(`안녕하세요, 저는 ${this.age} 살의 ${this.name}입니다.`);
  }
}

let person = new Person();
person.name = "Alice";
person.age = 20;
person.introduce();