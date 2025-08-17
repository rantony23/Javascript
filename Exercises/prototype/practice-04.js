class Usuario{
    constructor(name, rol){
        this.name = name;
        this.rol = rol;
    }

    greet(){
        console.log(`Hi , this is ${this.name} and I am ${this.rol}`);
    }
}

class Admin extends Usuario{
    deleteUser(user){
        console.log(`Deleting ${user}...`);
    }
}

class Client extends Usuario {
    buying(product){
        console.log(`buying ${product}`)
    }
}

let pagos = {
    payment(amount){
        console.log(`paying ${amount}`);
    },
};

Object.assign(Client.prototype, pagos);

const cliente = new Client("Antonio", "User");
cliente.payment(500);


class Character{
    constructor(name,life){
        this.name = name ;
        this.life = life;
    }
}

class Warrior extends Character{
    attack(opponent){
        return opponent.life -= 20;
    };
}

class Sorcerer extends Character{
    attack(opponent){
        opponent.life -= 15;
        this.life += 10;
    }
}

let flying ={
    fly(){
        console.log(`flying...`);
    }
}

function Battle(char1, char2){
    while( char1.life > 0 && char2.life > 0 ){
        char1.attack(char2);
        char2.attack(char1);
    };
    if(char1.life > char2.life){
        return console.log(`${char1.name} won the battle`);
    }else{
        return console.log(`${char2.name} won the battle`);
    }
    
}
Object.assign(Sorcerer.prototype, flying);

const Ragnael = new Warrior("Ragnael", 200);
const Blixi = new Sorcerer('Blixi', 100);

Battle(Ragnael, Blixi);


