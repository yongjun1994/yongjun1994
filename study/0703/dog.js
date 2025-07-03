var MyDog = /** @class */ (function () {
    function MyDog() {
    }
    MyDog.prototype.bark = function () {
        console.log("멍멍");
    };
    return MyDog;
}());
var myDog = new MyDog();
myDog.bark();
