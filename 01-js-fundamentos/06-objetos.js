// Existen varias formas de crear objetos en JavaScript. Aquí estudiaremos aquellas formas que 
// utilizaremos con frecuencia programando en React. Comencemos estudiando como crear objetos con 
// notación literal: Object Literal. Un objeto literal se crea encerrando entre llaves una colección de 
// pares propiedad:valor, separadas por coma. Veamos el siguiente ejemplo.

// En un objeto literal, los valores pueden ser arreglos, funciones o incluso otros objetos (línea 6). 

let yo = {
    name: "Enrique",
    surname: "Molinari",
    sports: ["futbol", "tenis"],
    address: {
        street: "San Martin",
        number: 125,
    },
    allSports: function () {
        console.log(this.sports);
    },
};

//un objeto vacio
let objetoVacio = {};

// Por otro lado, desde ES6, es posible crear objetos literales utilizando variables como nombre 
// de propiedad. Veamos a continuación como se utiliza en la línea 6: 
let aproperty = "phone";

//un objeto literal con una computed property name 
let computed = {
    name: "Enrique",
    surname: "Molinari",
    [aproperty]: "+54 2920 259031"
};


// Cada vez que el intérprete de JavaScript evalúa un objeto literal se crea la instancia. 
// Las propiedades de los objetos se acceden utilizando la notación de punto. 
// Veamos un ejemplo:

console.log(yo.name); //Enrique
console.log(yo.sports[0]);//futbol
console.log(yo.address.street);//San Martin
yo.allSports(); //invocando a la funcion               

// En JavaScript es posible agregar propiedades nuevas en tiempo de ejecución a los objetos.
// Éste concepto es sumamente importante para entender algunas cuestiones más adelante.
// Observen el siguiente ejemplo:

let obj = { a: 1, b: 2 };

//agrego nuevas propiedades al objeto
obj.x = 3;
obj.y = 4;

//Podemos utilizar spread syntax con objetos también:

let obj1 = {
    a: 1,
    b: 2,
};

let obj2 = {
    c: 3,
    d: 4,
};

let obj3 = { ...obj1, ...obj2 };
//obj3 = { a: 1, b: 2, c: 3, d: 4 }


// Podemos crear objetos a partir de variables inicializadas, de la siguiente forma:

let a = 1,
    b = 2;

let obj4 = {
    a,
    b,
};

//obj4 = { a: 1, b: 2 }	