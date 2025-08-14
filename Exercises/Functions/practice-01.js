function saludar(nombre, saludo = 'hola'){
    return saludo + ', ' + nombre;
}
console.log(saludar("juan"));
const saludarFlecha = (nombre, saludo = "que mas!") =>{
    return saludo + ", " + nombre;
}

console.log(saludarFlecha("brownie"));

const usuario1 = { nombre: "Ana", edad: 25, email: "ana@mail.com" };
const usuario2 = { nombre: "Luis", edad: 30, email: "luis@mail.com" };


function mostrarNombreEmail ({nombre, email}){
    return `nombre: ${nombre}, Email: ${email}`;
}

console.log(mostrarNombreEmail(usuario1));
console.log(mostrarNombreEmail(usuario2));

const obj = {
    nombre:'Antonio',
};

function Extender(){
    this.login = () =>{
        console.log(`logeando usuario ${this.nombre}`);
    };
    this.logout = () =>{
        console.log(`cerrando sesion ${this.nombre}`);
    }

}

Extender.call(obj);
console.log(obj);
obj.login();
obj.logout();

function parseJSON(str){
    try {
        const obj = JSON.parse(str);
    } catch (error) {
        console.log(error);
    }
}