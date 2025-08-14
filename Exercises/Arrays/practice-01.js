const ventas = [
  { producto: "Laptop", categoria: "Tecnología", precio: 1200 },
  { producto: "Mouse", categoria: "Tecnología", precio: 25 },
  { producto: "Teclado", categoria: "Tecnología", precio: 45 },
  { producto: "Silla", categoria: "Muebles", precio: 150 },
  { producto: "Escritorio", categoria: "Muebles", precio: 300 },
  { producto: "Camiseta", categoria: "Ropa", precio: 20 },
  { producto: "Pantalón", categoria: "Ropa", precio: 35 }
];

const totalVentas = ventas.reduce((acc,elem) =>{
    if(acc[elem.categoria]){
        acc[elem.categoria] += elem.precio;
    }else{
        acc[elem.categoria]= elem.precio;
    }
    return acc;
},{});

console.log(totalVentas);

const estudiantes = [
  { id: 101, nombre: "Ana", nota: 8.5 },
  { id: 102, nombre: "Luis", nota: 7.3 },
  { id: 103, nombre: "María", nota: 9.1 },
  { id: 104, nombre: "Pedro", nota: 6.8 }
];

const newObjecto = estudiantes.reduce((acc,elem)=>{
    acc[elem.id]={nombre:elem.nombre , nota: elem.nota};
    return acc;
},{});

console.log(newObjecto);

const compras = [
  { item: "Manzana", precio: 1.2 },
  { item: "Pan", precio: 2.5 },
  { item: "Leche", precio: 1.8 },
  { item: "Queso", precio: 3.0 }
];

const totalPrecios = compras.reduce((acc,elem) =>{
    return acc + elem.precio;
},0);

console.log(totalPrecios);

const numeros = [3, 4, 7, 10, 15, 20, 23];

const contar = numeros.reduce((acc,elem) =>{
    if(elem % 2 === 0){
    acc.pares += 1;
    }else{
        acc.impares +=1;
    }
    return acc;
}, {pares: 0 , impares: 0})
console.log(contar);

// Resultado esperado: { pares: 3, impares: 4 }

const nombres = ["Juan", "Pedro", "Ana", "Lucía", "Eva", "José"];

const agrupando = nombres.reduce((acc,elem) =>{
    if(!acc[elem.length]){
        acc[elem.length] = [];
    }
    acc[elem.length].push(elem);
    return acc;
},{});

console.log(agrupando);

const frases = [
  "Me gusta el café",
  "El café me mantiene despierto",
  "Programar es divertido",
  "El café es vida"
];

const combinando = frases.reduce((acc,elem) =>{
    acc = acc + " " + elem;
    return acc;
},"");
console.log(combinando);

const arreglo = combinando.split(" ");
console.log(arreglo);

const eliminando = [...new Set(arreglo)];
console.log(eliminando);
const uniendo = eliminando.join("");
console.log(uniendo);
