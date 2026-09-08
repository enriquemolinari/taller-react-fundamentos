# 07 - React Forms

Módulo sobre manejo de formularios en React usando la librería **react-hook-form**.

## Estructura de `src/`

```
src/
├── main.jsx
├── index.css
├── App.jsx
├── 01-form-basico/
│   └── DemoFormBasico.jsx
└── 02-form-login/
    └── Login.jsx
```

## Conceptos

### ¿Por qué react-hook-form?

Manejar formularios en React con `useState` se vuelve verboso rápidamente: hay que crear un estado por cada campo, actualizar cada uno en su `onChange`, y validar manualmente. **react-hook-form** resuelve todo eso con mucho menos código, aprovechando las referencias del DOM en lugar del estado de React.

---

### `useForm()`

El hook principal de la librería. Devuelve las herramientas para controlar el formulario:

```jsx
// src/01-form-basico/DemoFormBasico.jsx
const { register, handleSubmit, formState: { errors } } = useForm();
```

| Función/valor | ¿Para qué sirve? |
|---|---|
| `register` | Conecta un input al formulario y define sus reglas de validación |
| `handleSubmit` | Valida el form antes de ejecutar el callback de envío |
| `errors` | Contiene los mensajes de error de los campos inválidos |

---

### `register`

Conecta un `<input>` al formulario y define reglas de validación. Se usa con spread `{...register(...)}` sobre el input:

```jsx
// src/01-form-basico/DemoFormBasico.jsx
<input
  {...register('nombre', { required: 'El nombre es obligatorio' })}
  placeholder="Tu nombre"
/>
```

El primer argumento es el **nombre del campo** (será la clave en los datos del submit). El segundo objeto define las **reglas de validación**.

---

### `handleSubmit`

Es un wrapper de la función de submit. Cuando el usuario envía el form, `handleSubmit` primero valida todos los campos. Si son válidos, llama a la función con los datos del form:

```jsx
// src/01-form-basico/DemoFormBasico.jsx
function onSubmit(datos) {
  console.log('Datos del formulario:', datos);
}

<form onSubmit={handleSubmit(onSubmit)}>
```

Si hay errores, **no llama a `onSubmit`** y rellena el objeto `errors`.

---

### `errors`

Objeto que contiene los errores de validación. Si un campo falla, `errors.nombreCampo` existe y tiene un `message`:

```jsx
// src/01-form-basico/DemoFormBasico.jsx
{errors.nombre && <span>{errors.nombre.message}</span>}
```

---

## Formulario de Login con llamada a una API real

### Preparación del backend

El ejemplo de login consume una API (Servicio Web). Para levantarla localmente, clonar y ejecutar el proyecto:

```
https://github.com/enriquemolinari/taller-persistencia-apiweb/tree/capa-web-service-repositorios-login1
```

Una vez iniciado el servicio, crear un usuario con:

```bash
curl --location 'http://localhost:8080/registrar' \
--header 'Content-Type: application/json' \
--data '{
    "username": "enrique",
    "password": "12345"
}'
```

---

### `Login.jsx` formulario que consume una API

El componente en `src/02-form-login/Login.jsx` usa los mismos conceptos de `useForm` ya vistos, pero el `onSubmit` realiza una llamada `fetch` real al backend.

#### Llamada a la API con `fetch`

```jsx
// src/02-form-login/Login.jsx
async function onSubmit(datos) {
    setErrorMessage(null);
    setSuccessMessage(null);
    const response = await fetch(
        `${host}/login`,
        {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: datos.usuario,
                password: datos.clave
            }),
        }
    );
    if (response.ok) {
        setSuccessMessage("Login successful!");
    } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
    }
}
```

| Detalle | Explicación |
|---|---|
| `async/await` | Permite esperar la respuesta sin bloquear el hilo principal |
| `method: "POST"` | El método HTTP requerido por el Servicio Web |
| `credentials: "include"` | Incluye cookies en la petición |
| `body: JSON.stringify(...)` | Convierte el objeto JS a texto JSON para enviarlo |
| `response.ok` | `true` si el servidor respondió con código 2xx (éxito) |

#### Manejo de respuesta exitosa y de error

```jsx
// src/02-form-login/Login.jsx
{successMessage && <span style={{ color: 'green' }}>{successMessage}</span>}

{errorMessage && <span style={estilos.error}>{errorMessage}</span>}
```

Si la API responde con éxito se muestra un mensaje en verde. Si responde con error, se muestra el mensaje que devuelve el servidor.
