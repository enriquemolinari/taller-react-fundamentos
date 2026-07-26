# 06 - React Fetching Data

Aquí estudiaremos cómo consumir datos de una API en React utilizando `useEffect`. También veremos cómo hacerlo con la librería `TanStack Query` (antes llamada React Query), que es el estándar de facto para el manejo de fetching de datos en React.

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
├── 02-tanstack-query/
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── Body.jsx
│   ├── Welcome.jsx
│   ├── Post.jsx
│   ├── Users.jsx
│   └── useVistaStore.js
└── 03-tanstack-query-paging/
    └── Todos.jsx
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

Esta carpeta reimplementa la misma aplicación (misma estructura de componentes, mismo Zustand para la navegación) pero reemplaza `useEffect` + `useState` manual por **TanStack Query**.

### ¿Por qué TanStack Query?

Con `useEffect` tenemos que administrar manualmente tres variables de estado (`cargando`, `error`, `datos`), escribir el fetch, y recordar el arreglo de dependencias. TanStack Query encapsula todo eso y además agrega:

- **Caché automático**: si ya se cargaron los datos, no vuelve a hacer la petición hasta que venzan.
- **Re-fetch inteligente**: al volver a enfocar la ventana, refresca los datos si están desactualizados.
- **Reintentos automáticos**: por defecto reintenta 3 veces si hay un error de red.
- **Estados derivados listos**: `isLoading`, `isError`, `isSuccess` sin código extra.

### Instalación

```bash
npm i @tanstack/react-query
```

### Configuración en [`App.jsx`](./src/App.jsx)

Para que `useQuery` funcione, toda la aplicación debe estar envuelta en un `QueryClientProvider`. El `QueryClient` es el objeto que gestiona la caché compartida entre todos los componentes.

```jsx
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <Home />
</QueryClientProvider>
```

### [`Home.jsx`](./src/02-tanstack-query/Home.jsx)

Idéntico al de `01-useeffect-fetching` en estructura, actualizado para reflejar que usa TanStack Query. Obtiene `vistaActiva` de Zustand y renderiza `Menu` y `Body`.

```jsx
export default function Home() {
  const vistaActiva = useVistaStore((state) => state.vistaActiva);
  return (
    <section className="card">
      <span className="badge badge-info">TanStack Query + Zustand</span>
      <h2>Fetching Data con TanStack Query</h2>
      <Menu vistaActiva={vistaActiva} />
      <Body vistaActiva={vistaActiva} />
    </section>
  );
}
```

### [`Post.jsx`](./src/02-tanstack-query/Post.jsx)

Reemplaza el `useState` + `useEffect` por una sola llamada a `useQuery`.

```jsx
export default function Post() {
  //data: posts significa que a la data que devuelve useQuery le ponemos el alias posts
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
    // 1 minuto en cache, no hace el resquest hasta que pase el tiempo
    // o se invalide explícitamente con queryClient.invalidateQueries({ queryKey: ['posts'] })
    staleTime: 1 * 60 * 1000
  });

  if (isLoading) return <p className="loading-msg">Cargando publicaciones desde la API...</p>;
  if (error) return <p className="error-msg">Error al cargar los posts: {error.message}</p>;

  return ( /* ... renderizado de la lista de posts ... */ );
}
```

**Claves del objeto de configuración de `useQuery`:**

| Propiedad | Qué hace |
|---|---|
| `queryKey` | Identificador único de la query en la caché. Si dos componentes usan la misma `queryKey`, comparten la misma caché. |
| `queryFn` | La función que realiza el fetch. Debe retornar una Promise. |
| `staleTime` | Tiempo en ms que los datos se consideran "frescos". Durante ese tiempo no se vuelve a hacer el request. |

### [`Users.jsx`](./src/02-tanstack-query/Users.jsx)

Mismo patrón que `Post.jsx` pero con dos diferencias: usa `async/await` y verifica `res.ok` manualmente.

```jsx
export default function Users() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    // retry: 0 → falla rápido sin reintentos. Por defecto hay 3 intentos.
    retry: 0,
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // fetch() no lanza error en respuestas HTTP 4xx/5xx.
      // Hay que verificar res.ok manualmente y lanzar el error para que
      // useQuery lo capture y actualice el estado de error.
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }
      return res.json();
    },
  });

  if (isLoading) return <p className="loading-msg">Cargando usuarios desde la API...</p>;
  if (error) return <p className="error-msg">Error al cargar los usuarios: {error.message}</p>;

  return ( /* ... renderizado de la lista de usuarios ... */ );
}
```

---

## Ejemplo: `03-tanstack-query-paging/`

Esta carpeta introduce la **paginación con TanStack Query**. Consume el endpoint de TODOs de JSONPlaceholder con los parámetros `_page` y `_limit`.

### ¿Cómo funciona la paginación?

La clave es incluir la página actual (su número) dentro de la `queryKey`. Así TanStack Query guarda en caché cada página por separado y sabe cuándo debe volver a hacer el request.

```
queryKey: ['todos', 1]  → caché para la página 1
queryKey: ['todos', 2]  → caché para la página 2  ← entrada distinta
```

Si la `queryKey` fuera siempre `['todos']`, al cambiar de página la caché no se invalidaría y siempre se vería la primera respuesta.

### [`Todos.jsx`](./src/03-tanstack-query-paging/Todos.jsx)

```jsx
export default function Todos() {
  // useState controla qué página se solicita
  const [page, setPage] = useState(1);

  const { data: todos, isLoading, error } = useQuery({
    // page forma parte de la queryKey → nueva entrada en caché por cada página
    queryKey: ['todos', page],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
      ).then((res) => res.json()),
  });

  if (isLoading) return <p className="loading-msg">Cargando TODOs...</p>;
  if (error) return <p className="error-msg">Error: {error.message}</p>;

  return (
    <div>
      <h3>TODOs - Página {page}</h3>
      <div className="grid-container">
        {todos.map((todo) => (
          <article key={todo.id} className="item-card">
            <h4>#{todo.id} - {todo.title}</h4>
            <span>{todo.completed ? '✓ Completado' : '⏳ Pendiente'}</span>
          </article>
        ))}
      </div>

      {/* Botones de navegación */}
      <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>
        ← Anterior
      </button>
      <button onClick={() => setPage((p) => p + 1)}>
        Siguiente →
      </button>
    </div>
  );
}
```

Observar que `page` es una variable de estado de react y al modificarse se produce un nuevo renderizado (invocación a la función que define al componente) y en cada renderizado se invoca a useQuery() y debido a que `page` forma parte de la `queryKey`, se produce un nuevo fetch a la API.
