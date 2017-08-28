
class person {
    name: string;
    age: number;

    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    personDetails () {
        return `Person name is ${this.name} and ${this.age} years of age`;
    }
}

var Tendulkar = new person('Sachin Tendulkar', 40);
document.write(Tendulkar.personDetails());