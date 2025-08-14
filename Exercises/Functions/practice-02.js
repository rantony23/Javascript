// Ejercicio 1: Convierte esta función en arrow function
const saludar = nombre =>  `Hola ${nombre}`;
console.log(saludar("Reinaldo"));

// Ejercicio 2: Arrow function que multiplique dos números
// Tu código aquí
const multiplicacion = (a, b) => a * b;
console.log(multiplicacion(34, 56));


function crearUsuario ( nombre = "invitado"){
    return {nombre};
}
console.log(crearUsuario());

const poodles = (nombre = 'brownie') => ({nombre});

console.log(poodles());

// Ejercicio 5: ¿Qué imprime este código y por qué?
let mensaje = "Hola global";

function mostrarMensaje() {
    mensaje = "Hola local";
    console.log(mensaje);
}
mostrarMensaje();
console.log(mensaje);

// Ejercicio 7: Captura el error de parsear un JSON inválido
const textoJSON = "{ nombre: 'Reinaldo' }"; // inválido

try {
    const data = JSON.parse(textoJSON);
    console.log(data);
} catch (error) {
    console.error("Error al parsear JSON:", error.message);
}

// Ejercicio 8: Función que lance un error si el número es negativo
// Tu código aquí

const numeros = [10, 23, 34, -50, 60];

function verificacion( number) {
    let verificados =[];
    for ( num of number){
        if(num < 0){
            throw new Error(`numero invalido: ${num}`);
        }else{
            verificados.push(num);
        }
    }
    return verificados;
}

try{ 
    const resultado = verificacion(numeros);
    console.log(resultado);
}catch(error){
    console.log("error encontrado: ", error.message);
}