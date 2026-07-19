// Consumir servicios HTTP usando fetch (utilidad built-in in the browser).
// La firma de fetch es la siguiente:

// Promise<Response> fetch(url [, init])

// Promise es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. 
// Es el resultado de una operación ası́ncrona

let unaPromesa = fetch("https://jsonplaceholder.typicode.com/posts/1");

unaPromesa
    .then((response) => {
        // response es un objeto de tipo Response, el cual tiene varios métodos para acceder a la información
        // que nos devuelve el servidor. Uno de ellos es .json(), el cual devuelve otra promesa que se resuelve
        // con el contenido del body parseado como JSON.
        if (!response.ok) {
            // lanzar esta exception implica que el flujo del programa va al catch().
            throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        // data es un objeto con la información parseada como JSON.
        console.log(data);
    })
    .catch((error) => {
        // Si algo sale mal, podemos capturar el error y manejarlo.
        // Esto se invoca SOLO con errores de red o si lanzamos un Error en el then anterior.
        // No con errores de status HTTP.
        console.error("Error:", error);
    });

// unaPromesa expone los métodos then() y catch() para manejar la resolución o el rechazo de la promesa.
// la ejecución de este script continuará mientras fetch hace la petición HTTP en segundo plano. 
// Cuando la promesa se resuelva, se ejecutará el callback que pasamos a then() o catch() según corresponda.

console.log("Esto se ejecuta antes de que la promesa se resuelva, ya que fetch es asíncrono.");

// async/await: surge como una forma más legible de trabajar con promesas. Permite escribir código asíncrono que se lee de manera similar al código síncrono.

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            // lanzar esta exception implica que el flujo del programa va al catch().
            throw new Error(`HTTP Error: ${response.status}`);
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

//fetchData();
