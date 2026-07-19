// La forma clásica de iterar sobre un arreglo es utilizando la construcción sintáctica for, como se 
// muestra a continuación: 

let family = ["Jóse", "Nicolas", "Lucia", "Enrique"];
for (let element of family) {
    console.log("regular for: ", element);
}

// Sin embargo, los arreglos proveen de un conjunto de métodos muy convenientes y que utilizaremos con frecuencia.
// El más simple es .forEach:

let family = ["Jóse", "Nicolas", "Lucia", "Enrique"];

family.forEach((value) => {
    //acá hacemos algo con value	
});

//Un método más interesante aún es .filter, el cual se utiliza para procesar el arreglo y devolver otro 
// con igual o menos elementos. Recibe una función y devuelve un arreglo para aquellos elementos donde 
// la función evalúa a true. Veamos cómo se utiliza a continuación:


let family = ["Jóse", "Nicolas", "Lucia", "Enrique"];

const members = family.filter((member) => {
    return member.length > 5;
});

//members = ['Nicolas', 'Enrique']. family = ['Jóse', 'Nicolas', 'Lucia', 'Enrique'] no se toca

// Otro de los métodos interesantes, y principalmente útil para React como veremos más adelante, es .map.
// Éste método, al igual que el anterior, recibe una función como parámetro y retorna otro arreglo 
// con el resultado de aplicar la función recibida sobre cada elemento. 
// Veamos el siguiente ejemplo:


let numbers = [1, 2, 3, 4, 5, 6, 7];
const doubles = numbers.map((element) => {
    return element * 2;
});
//doubles = [2,  4,  6, 8, 10, 12, 14]


// Éstos métodos se pueden combinar. Veamos el siguiente ejemplo. Primero aplicamos .filter sobre un 
// arreglo de enteros, para quedarnos solo con aquellos que son impares y luego multiplicamos por dos 
// cada uno de los elementos para transformarlos en pares.

let numbers = [1, 2, 3, 4, 5, 6, 7];
const chain = numbers
    .filter((element) => {
        return element % 2 !== 0;
    }) //[1, 3, 5, 7]
    .map((element) => {
        return element * 2;
    });
//chain = [2, 6, 10, 14]
