// Cuando declaramos una variable sin inicializar, el intérprete la inicializará con el valor especial
// undefined. Esto se puede observar si intentamos imprimir en la consola una variable no inicializada.

let myFirstVariable;
console.log(myFirstVariable); // undefined

// JavaScript es un lenguaje con tipos dinámicos. Ésto, entre otras cosas, significa que el tipo de una variable puede cambiar en tiempo de ejecución. 
// A diferencia de los lenguajes estáticos donde los tipos de las variables se definen durante la compilación y no pueden cambiar durante la ejecución.

//mi tipo string
let changeMyType = "Hello String!";
console.log(typeof changeMyType);

//ahora es number
changeMyType = 100;
console.log(typeof changeMyType);

// También es posible declarar una variable utilizando la palabra const.
//Al declarar la variable const no podremos modificar su valor, si lo intentan el intérprete lanzará un error. 

const myFirstConst = "Hello constant value!";

