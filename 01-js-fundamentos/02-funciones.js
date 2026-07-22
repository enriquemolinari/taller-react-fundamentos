// declaración de una función

function suma(a, b) {
  return a + b;
}

// invocación de una función

suma(2, 3); // 5    

// función flecha con return implícito

const sumaFlecha = (a, b) => a + b;

sumaFlecha(2, 3); // 5

// funcion flecha con return explícito que retorna un objeto

const funcionConReturnExplicito = () => {
  return {
    nombre: "Juan",
    apellido: "Pérez"
  }
};

// Es lo mismo que esto, con return implícito que retorna un objeto

const funcionConReturnImplicito = () => ({
  nombre: "Juan",
  apellido: "Pérez"
});

// función flecha con return explícito

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
  console.log("Función pasada como parámetro");
}); 
