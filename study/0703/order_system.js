var User2 = /** @class */ (function () {
    function User2() {
    }
    return User2;
}());
var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
var Order2 = /** @class */ (function () {
    function Order2() {
    }
    Order2.prototype.summary = function () {
        console.log("\uC0AC\uC6A9\uC790 ".concat(this.user2.username, "\uAC00 ").concat(this.product2.productName, "\uC744(\uB97C) \uC8FC\uBB38\uD588\uC2B5\uB2C8\uB2E4."));
    };
    return Order2;
}());
var user2 = new User2();
user2.username = "홍길동";
var product2 = new Product2();
product2.productName = "책";
var order2 = new Order2();
order2.user2 = user2;
order2.product2 = product2;
order2.summary(); // 사용자 홍길동가 책을(를) 주문했습니다.
