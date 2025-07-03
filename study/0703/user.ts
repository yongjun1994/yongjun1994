// Animal 클래스를 Animal.ts에서 import
import { Animal } from "./Animal";

// Dog 클래스는 Animal을 상속받고 sound()를 오버라이딩
class Dog extends Animal {
  sound(): void {
    console.log("멍멍!");
  }
}

// Cat 클래스는 Animal을 상속받고 sound()를 오버라이딩
class Cat extends Animal {
  sound(): void {
    console.log("야옹!");
  }
}

// 테스트
const dog = new Dog();
const cat = new Cat();

dog.sound(); // 멍멍!
cat.sound(); // 야옹!
