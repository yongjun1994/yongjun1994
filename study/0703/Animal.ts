class Animal { //
  sound() {
    console.log("동물이 소리를 냅니다.");
  }
}

class Dog extends Animal { // Dog 클래스는 Animal을 상속받고 sound()를 오버라이딩
  sound() {
    console.log("멍멍");
  }
}

class Cat extends Animal { // Cat 클래스는 Animal을 상속받고 sound()를 오버라이딩
  sound() {
    console.log("야옹");
  }
}

let dog = new Dog(); // Dog 클래스의 인스턴스를 생성
dog.sound(); // Dog 클래스의 sound 메서드를 호출

let cat = new Cat(); // Cat 클래스의 인스턴스를 생성
cat.sound(); // Cat 클래스의 sound 메서드를 호출