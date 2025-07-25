class Product {
  name: string;
  price: string;

  // constructor : 생성자
  constructor(name: string, price: string) { // constructor는 클래스의 인스턴스를 생성할 때 호출되는 메서드입니다.
    // this는 현재 인스턴스를 참조합니다.
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`제품명: ${this.name}, 가격: ${this.price}원`);
  }
}

let product = new Product("MacBook", "150만"); //product는 Product 클래스의 인스턴스입니다.
// product.name과 product.price는 각각 "MacBook"과 "150만"으로 초기화됩니다.
product.display(); // display 메서드를 호출하여 제품 정보를 출력합니다.