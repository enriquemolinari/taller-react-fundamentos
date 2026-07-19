// Así es como declaramos un arreglo:

//un arreglo vacio
let empty = [];

//un arreglo de cuatro elementos
let family = ["Jóse", "Nicolas", "Lucia", "Enrique"];

//Dado que los arreglos en JavaScript son objetos, tenemos varios métodos útiles que podremos utilizar, 
// como el que se muestra a continuación para agregar elementos al final:


let family = ["Jóse", "Nicolas", "Lucia", "Enrique"];

//agrega un elemento al final del arreglo
family.push("Pablo");

// Si quisiéramos incorporar todos los elementos de un arreglo en otro arreglo, tenemos la opción 
// de utilizar la construcción sintáctica denominada spread syntax. Veamos cómo se utiliza:

let myParents = ["EnriqueR", "Susana"];
let JoseParents = ["Eduardo", "Graciela"];
let family = ["Jóse", "Nicolas", "Lucia", "Enrique"];
let all = [...myParents, ...JoseParents, ...family];

//[
//  'EnriqueR', 'Susana', 'Eduardo', 'Graciela', 
//  'Jóse', 'Nicolas', 'Lucia', 'Enrique'
// ]

