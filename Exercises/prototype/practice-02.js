function Animal(name){
    this.name = name;
};

Animal.prototype.speak = function(){
    console.log(` ${this.name}, make a noise`);
}
function Dog (name){
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.ladrar = function(){
    console.log('Guau Guau !');
}
const brownie = new Dog( "brownie");
brownie.speak();
brownie.ladrar();


function Vehicle (make , year){
    this.make = make;
    this.year = year;
}

function Car (make , year, door){
    Vehicle.call(this,make , year);
    this.door = door;
};

Vehicle.prototype.description = function(){
    console.log(`this is a ${this.make}, ${this.year}`);
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.description = function(){
    console.log(` this is a ${this.make}, ${this.year} and has ${this.door}`);
}

const toyota = new Car("Toyota", 2001 , 4 );
toyota.description();


