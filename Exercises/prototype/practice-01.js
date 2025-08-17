//Animals:

function Animal (){
    this.name = name;
}
Animal.prototype.makeNoise = function(){
    console.log("making noise");
};

function Dog(name){
    Animal.call(this, name);
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.ladrar = function(){
    console.log("guau Guau!"); 
}

//Cars:

function Vehicle(make){
    this.make = make;
};

Vehicle.prototype.turnOn = function(){
    console.log(`${this.make} Vehicle has turned on`);
};

function Car(make, model){
    Vehicle.call(this, make);
    this.model = model;
}

Car.prototype.beepBeep= function(){
    console.log("Beep Beep!");
}

Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
Car.prototype.constructor = Car;

const myCar = new Car("Toyota", "Camry");

myCar.turnOn();
