# 06 - React Fetching Data

Aquí estudiaremos como consumir datos de una API en React utilizando `useEffect`. Tambien veremos como podemos hacerlo utilizando una libreria externa al framework como es `TanStack Query` (antes llamada React Query). `TanStack Query` es el estadar de facto para manejar el fetching de datos en React.

---

## Estructura de `src/`

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── 01-useeffect-fetching/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Body.jsx
│   ├── Welcome.jsx
│   ├── Post.jsx
│   ├── Users.jsx
│   └── useVistaStore.js
└── 02-tanstack-query/
    └── README.md         ← reservado para implementar por el alumno
```

---

## Conceptos

### 1. ¿Qué es una función pura?

Un componente React debe comportarse como una **función pura** respecto a sus props y estado: dado el mismo input (props/estado), siempre debe producir el mismo output (UI).

```jsx
// Función PURA: mismo input → mismo output, siempre
function Saludo({ nombre }) {
  return <p>Hola, {nombre}!</p>;
}
```

### 2. ¿Qué es un efecto de lado (side effect)?

Un **efecto de lado** es cualquier operación que interactúa con el mundo exterior o produce consecuencias fuera del cálculo puro de la UI (el renderizado del JSX).

Ejemplos de efectos de lado:
- **Fetch a una API**: puede fallar (error de red, servidor caído), tardando tiempos variables.
- Suscripciones a WebSockets.
- `setTimeout` / `setInterval`: por ejemplo, una vez invocada la funcion que define el componente, tenemos un temporizador que cambia el valor de una variable cada cierto tiempo. El re-renderizado del componente seria un efecto de lado. 
- Manipulación manual del DOM (por ejemplo con `document.querySelector` o `document.getElementById`). 

A React no le molesta que hagas estas cosas, simplemente te pide que NO las hagas mientras él está calculando cómo se tiene que ver la pantalla. Te pide que las envuelvas en un `useEffect`.

### 3. ¿Por qué no puedo poner un fetch directo en el render?

React ejecuta el cuerpo de la función del componente en **cada renderizado**. Si pusiéramos el `fetch` directamente en el cuerpo del componente, ocurriría esto:

```
render → fetch → llegan datos → setState → re-render → fetch → datos → setState → ...
```

Se generaría un **loop infinito**. Por eso React nos provee `useEffect`.

---

### 4. `useEffect`: ejecutar efectos de lado de forma segura

`useEffect` permite decirle a React: _"ejecutá este código DESPUÉS de que el componente ya se renderizó"_. Así el render queda puro y el efecto de lado ocurre en el momento correcto.

`useEffect` es una función (hook) que recibe una función como parámetro (callback). El callback se ejecuta DESPUES del primer renderizado y luego de cada re-renderizado.

```jsx
useEffect(() => {
  // Este callback se ejecuta DESPUÉS del renderizado
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((datos) => setPosts(datos));
}, []); // atención mas abajo a la explicación del []
```

#### ¿Cuándo exactamente se ejecuta el callback de `useEffect`?

El ciclo de vida es el siguiente:

```
1. React ejecuta la función del componente (renderizado)
2. React actualiza el DOM con el resultado
3. El navegador pinta la pantalla
4. → RECIÉN ACÁ React ejecuta el callback de useEffect
```

Es decir: **el componente ya se vio en pantalla** (en estado de carga) antes de que el fetch empiece. El usuario siempre ve algo rápidamente; los datos llegan después.

#### ¿Por qué es necesario el `[]` (arreglo de dependencias)?

El segundo parámetro de `useEffect` es el **arreglo de dependencias**. Controla cuándo React vuelve a ejecutar el efecto.

| Segundo parámetro | Comportamiento |
|---|---|
| Sin él | Se ejecuta en **cada** renderizado → loop infinito con fetch |
| `[]` vacío | Se ejecuta **una sola vez**, al montar el componente |
| `[valor]` | Se ejecuta cada vez que `valor` cambia |

```jsx
// Con [] vacío: el fetch ocurre solo una vez, al montar el componente
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((datos) => {
      setPosts(datos);
      setCargando(false);
    });
}, []); // <-- una sola ejecución
```

Sin el `[]`, cada vez que `setPosts` actualiza el estado, React re-renderiza el componente, lo que volvería a disparar el efecto, generando el loop infinito que queremos evitar.

---

## Ejemplo: `01-useeffect-fetching/`

Este ejemplo toma la aplicación del módulo anterior (navegación con Zustand, componentes `Home`, `Menu`, `Body`, `Post`, `Users`, `Welcome`) y reemplaza los datos hardcodeados por llamadas reales a:

- **Posts**: `https://jsonplaceholder.typicode.com/posts`
- **Users**: `https://jsonplaceholder.typicode.com/users`

### [`Post.jsx`](./src/01-useeffect-fetching/Post.jsx)

```jsx
export default function Post() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setPosts(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid-container">
      {posts.map((post) => (
        <article key={post.id} className="item-card">
          <h4>#{post.id} - {post.title}</h4>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
}
```

**Patrón de 3 estados**: todo fetch debería manejar:
1. **`cargando`**: mientras esperamos la respuesta de la API.
2. **`error`**: si el fetch falla.
3. **Datos**: cuando todo salió bien.

### [`Users.jsx`](./src/01-useeffect-fetching/Users.jsx)

Mismo patrón que `Post.jsx`, aplicado al endpoint de usuarios. Ver el archivo para la implementación completa.

---

## Ejemplo: `02-tanstack-query/`

Carpeta reservada para la implementación de **React TanStack Query** por el alumno.

> TanStack Query simplifica el patrón de fetching: maneja automáticamente los estados de carga, error, caché, re-fetching y mucho más, sin tener que escribir los `useState` y `useEffect` manualmente.

---

## Cómo ejecutar

```bash
cd 06-react-fetching-data
npm install
npm run dev
```
