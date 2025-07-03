class User2 {
  username: string;
}

class Product2 {
  productName: string;
}

class Order2 {
  user2: User2;
  product2: Product2;

  summary() {
    console.log(`사용자 ${this.user2.username}가 ${this.product2.productName}을(를) 주문했습니다.`
    );
  }
}

let user2 = new User2();
user2.username = "홍길동";

let product2 = new Product2();
product2.productName = "책";

let order2 = new Order2();
order2.user2 = user2;
order2.product2 = product2;

order2.summary(); // 사용자 홍길동가 책을(를) 주문했습니다.

