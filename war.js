
function Dog(name) {
    this.name = name;
    this.printName = function () {
        console.log(`멍멍이 ${this.name}`);
    };
    this.printName = this.printName.bind(this)
}

function Cat(name) {
    this.name = name;
    this.printName = function () {
        console.log(`야옹이 ${this.name}`);
    }
}
const dog = new Dog('멍멍');
const cat = new Cat('야옹');


dog.printName = cat.printName;
dog.printName();
cat.printName();

