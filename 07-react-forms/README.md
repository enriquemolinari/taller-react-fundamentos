# 07 - React Forms

Módulo sobre manejo de formularios en React usando la librería **react-hook-form**.

## Estructura de `src/`

```
src/
├── main.jsx
├── index.css
├── App.jsx
└── 01-form-basico/
    └── DemoFormBasico.jsx
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

Envuelve la función de submit. Cuando el usuario envía el form, `handleSubmit` primero valida todos los campos. Si son válidos, llama a la función con los datos del form:

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
