var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694, \uC800\uB294 ".concat(this.age, " \uC0B4\uC758 ").concat(this.name, "\uC785\uB2C8\uB2E4."));
    };
    return Person;
}());
var person = new Person();
person.name = "Alice";
person.age = 20;
person.introduce();
