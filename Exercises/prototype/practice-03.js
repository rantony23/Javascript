function mixin(Ctrs, ...args){
    Object.assign(Ctrs.prototype, ...args);
}

const Volador = {
    volar: function(){
        console.log(`${this.nombre} esta volando`);
    }
};

function SuperHeroe(nombre){
    this.nombre = nombre;
};

const Saltando = {
    saltar: function(){
        console.log(`${this.nombre} esta saltando`);
    }
};

mixin(SuperHeroe, Volador, Saltando);

const batman = new SuperHeroe("Batman");
batman.volar();
batman.saltar();

function Figura(){};
Figura.prototype.dibujar =  function (){
    console.log("Dibujando figura generica");
};

function Cuadro (){}
function Circulo(){}

Circulo.prototype.dibujar = function(){
    console.log("Dibujando Circulo");
}

Cuadro.prototype.dibujar = function(){
    console.log("Dibujando Cuadro");
}

let components = [
    new Circulo(),
    new Cuadro(),
];

components.forEach( c => c.dibujar());
