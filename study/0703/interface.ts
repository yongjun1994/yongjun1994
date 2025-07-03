interface Moveable {
  move(): void;
}

class Car implements Moveable { // override
  // Car 클래스는 Moveable 인터페이스를 구현
  move(): void {
    console.log("car");
  }
}

class Robot implements Moveable {
  move(): void {
    console.log("robot");
  }
}