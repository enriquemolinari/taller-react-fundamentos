// declaración de una función
 
function suma(a, b) {
  return a + b;
}

// invocación de una función

suma(2, 3); // 5    

// función flecha con return implícito

const sumaFlecha = (a, b) => a + b;

sumaFlecha(2, 3); // 5

// función flecha sin return implícito

const sumaFlecha2 = (a, b) => {
  return a + b;
};

console.log(sumaFlecha2(2, 3)); // 5

// Immediately Invoked Function Expression

(function () {
  console.log("IIFE");
})();

// pasaje por parámetro de una función

function ejecutarFuncion(func) {
  func();
}

ejecutarFuncion(function () {
  console.log("Funcion pasada como parametro");
}); 
