function ageVerification(age){
    if(age < 18){
        throw new Error("User not allowed , must be 18 or older ");
    }else{
        return "User validated";
    };
}

const user = {
    name:"Jaime",
    age: 17,
}
try {
    const verification = ageVerification(user.age);
    console.log(verification);
} catch (error) {
    console.log('error: ', error.message);
}

function dividing( a, b){
    if(b === 0){
        throw new Error("operation cannot be divided by 0 ");
    }
    return a / b;
}
try {
    console.log(dividing(45,0));
} catch (error) {
    console.log("error:" , error.message);
    
}

let persona = { 
    name:" Brownie",
    lastname:" Cuevas",

    get nombreCompleto(){
        return `${this.name} ${this.lastname}`;
    },
    set nombreCompleto(valor){
        let [name , lastname] = valor.split(" ");
        this.name = name;
        this.lastname = lastname;
    }
}

persona.nombreCompleto = "Blacky Quimbay";
console.log(persona.nombreCompleto);

let product = {
    price: 120,
    discount : 20,
    get finalPrice(){
        const total = this.price - this.price * (this.discount/100);
        return total;
    },
    set finalPrice(value){
        this.discount = ((this.price - value)/ this.price)* 100;
    }
}

product.finalPrice = 30;
console.log(product.finalPrice);


function ordenar(text, fn){
    const array = text.split("").sort().filter( p => p.trim()).join("");
    return fn(array);
};

ordenar("hola mundo", console.log)