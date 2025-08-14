const productos = [
  { id: 1, nombre: "Camiseta", categoria: "Ropa", precio: 25, stock: 10 },
  { id: 2, nombre: "Pantalón", categoria: "Ropa", precio: 40, stock: 0 },
  { id: 3, nombre: "Zapatos", categoria: "Calzado", precio: 60, stock: 5 },
  { id: 4, nombre: "Sandalias", categoria: "Calzado", precio: 35, stock: 8 },
  { id: 5, nombre: "Gorra", categoria: "Accesorios", precio: 15, stock: 0 },
  { id: 6, nombre: "Bufanda", categoria: "Accesorios", precio: 20, stock: 12 }
];

const filtering = productos.filter( product => product.stock > 0);
const upperName = filtering.map( product => product.nombre.toUpperCase());
const totalEarned = productos.reduce((acc,elem) =>{
    const valor = elem.stock * elem.precio;
    acc += valor;
    return acc;
},0);
console.log(totalEarned);

const creatingObject = productos.reduce((acc,elem) =>{
    if(!acc[elem.categoria]){
        acc[elem.categoria] = 0;
    }
    acc[elem.categoria]+= elem.stock;
    return acc;
},{})

console.log(creatingObject);