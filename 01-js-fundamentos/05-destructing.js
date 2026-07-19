// Existe una forma de asignar cada uno de los elementos de un arreglo a variables que se denomina 
// destructuring. Veamos a continuación el siguiente ejemplo:


let [one, two, three] = [1, 2, 3];
//one = 1
//two = 2
//three = 3

//igual al ejemplo previo
let fewNumbers = [1, 2, 3];
[one, two, three] = fewNumbers;

//y acá ademas usando spread syntax
let [a, b, ...rest] = [1, 2, 3, 4, 5];
//a = 1
//b = 2
//rest = [3, 4, 5]

console.log(a, b, rest);
