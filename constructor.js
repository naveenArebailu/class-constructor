var person = (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.personDetails = function () {
        return "Person name is " + this.name + " and " + this.age + " years of age";
    };
    return person;
}());
var Tendulkar = new person('Sachin Tendulkar', 40);
document.write(Tendulkar.personDetails());