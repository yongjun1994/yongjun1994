var Product = /** @class */ (function () {
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    Product.prototype.display = function () {
        console.log("\uC81C\uD488\uBA85: ".concat(this.name, ", \uAC00\uACA9: ").concat(this.price, "\uC6D0"));
    };
    return Product;
}());
var product = new Product("MacBook", "150만"); //product는 Product 클래스의 인스턴스입니다.
// product.name과 product.price는 각각 "MacBook"과 "150만"으로 초기화됩니다.
product.display(); // display 메서드를 호출하여 제품 정보를 출력합니다.
