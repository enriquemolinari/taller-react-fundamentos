# 03. Componentes en React, JSX y Props

“A React component is a JavaScript function that you can sprinkle with markup” ([react.dev/defining-a-component](https://react.dev/learn/your-first-component#defining-a-component)).

## Organización del Proyecto (`src/`)

El código de este módulo está organizado en dos subcarpetas dentro de `src/`:

```text
src/
 ├── 01-componentes-y-jsx/    # Concepto, instanciación y expresiones JSX {}
 │    ├── Encabezado.jsx
 │    ├── PerfilUsuario.jsx
 │    └── DemoComponentesYJsx.jsx
 ├── 02-props/                # Concepto de Props, desestructuración y reutilización
 │    ├── MensajeBienvenida.jsx
 │    ├── TarjetaProducto.jsx
 │    └── DemoProps.jsx
 ├── App.jsx                  # Interruptor para cambiar de demo en la clase
 └── main.jsx                 # Punto de entrada de React
```

---

## Concepto de Componente, Instanciación y JSX

### 1. ¿Qué es un componente y cómo se define?
Un **componente** es una función de JavaScript que retorna markup en forma de JSX. Es la construcción sintáctica más importante de React para construir UIs.

#### Reglas de definición:
1. **Función de JavaScript** (`function` o `arrow function`).
2. **Nombre en PascalCase**: La primera letra debe ser **Mayúscula** obligatoriamente (ej. `Encabezado`, `PerfilUsuario`).
3. **Retorna JSX**: Retorna la estructura visual que queremos mostrar.

#### De Mockups a Componentes
Al diseñar una web en React, dividimos el mockup o boceto visual en componentes y las organizamos en una jerarquía de árbol.

---

### Crear tu primer componente (`Encabezado.jsx`)

En `src/01-componentes-y-jsx/Encabezado.jsx` podemos encontrar:

```jsx
export default function Encabezado() {
  return (
    <header style={{ backgroundColor: '#282c34', color: 'white', padding: '1rem', borderRadius: '8px' }}>
      <h1>Mi Primera App en React</h1>
      <p>Aprendiendo el concepto de componentes y JSX</p>
    </header>
  );
}
```

---

### ¿Qué es JSX y cómo usar las llaves `{}`?
**JSX** (JavaScript XML) permite escribir etiquetas similares a HTML dentro de JavaScript. 

Las **llaves `{}`** en JSX nos permiten ejecutar y mostrar cualquier expresión de JavaScript (variables, operaciones matemáticas, llamadas a funciones o ternarios).

---

### Expresiones en JSX (`PerfilUsuario.jsx`)

En el archivo `src/01-componentes-y-jsx/PerfilUsuario.jsx` podemos encontrar:

```jsx
export default function PerfilUsuario() {
  const nombre = 'María López';
  const rol = 'Desarrolladora Frontend';
  const anioNacimiento = 1998;
  const anioActual = new Date().getFullYear();
  const esPremium = true;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <h2>Perfil de Usuario</h2>
      
      {/* 1. Mostrar variables directamente */}
      <p><strong>Nombre:</strong> {nombre}</p>
      
      {/* 2. Llamar métodos de cadenas */}
      <p><strong>Rol:</strong> {rol.toUpperCase()}</p>
      
      {/* 3. Realizar operaciones matemáticas */}
      <p><strong>Edad estimada:</strong> {anioActual - anioNacimiento} años</p>
      
      {/* 4. Usar operadores ternarios (condicionales) */}
      <p><strong>Suscripción:</strong> {esPremium ? 'Membresía Premium' : 'Plan Gratuito'}</p>
    </div>
  );
}
```

---

### ¿Cómo se instancian los componentes?
Instanciar significa usar el componente en JSX como una etiqueta:
* Etiquetas en minúscula (`<div>`, `<h1>`, `<p>`): Elementos nativos de HTML.
* Etiquetas en Mayúscula (`<Encabezado />`, `<PerfilUsuario />`): Componentes de React que 
**ejecutan** nuestra función.

---

### Instanciar y agrupar (`DemoComponentesYJsx.jsx`)

En el archivo `src/01-componentes-y-jsx/DemoComponentesYJsx.jsx` podemos encontrar:

```jsx
import Encabezado from './Encabezado';
import PerfilUsuario from './PerfilUsuario';

export default function DemoComponentesYJsx() {
  return (
    <section>
      {/* Instanciación de componentes propios */}
      <Encabezado />
      <PerfilUsuario />
    </section>
  );
}
```

---

## Props en React (Concepto y Reutilización)

### ¿Qué son las Props?
Las **Props** (propiedades) son los argumentos de entrada que recibe un componente. Permiten pasar datos desde un componente padre hacia un componente hijo.

#### Características de las Props:
* **Flujo Unidireccional**: Viajan únicamente de Padre -> Hijo.
* **Desestructuración**: Se recibe como un objeto al que por convención se lo llama `props` (es solo una convención, no es obligatorio). Ahora, en su lugar podemos usar la desestructuración de objetos en la firma de la función para recibir las variables (o propiedades del objeto) directamente: `function MiComponente({ nombre, edad })`.

---

### Crear componente con Props (`MensajeBienvenida.jsx`)

En el archivo `src/02-props/MensajeBienvenida.jsx` podemos encontrar:

```jsx
// Desestructuramos las props y asignamos un valor por defecto a 'rol'
export default function MensajeBienvenida({ nombre, rol = 'Estudiante' }) {
  return (
    <div style={{ backgroundColor: '#e3f2fd', color: '#0d47a1', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h3>¡Hola, {nombre}!</h3>
      <p>Tu rol asignado en la plataforma es: <strong>{rol}</strong></p>
    </div>
  );
}
```

---

### Props con diferentes tipos de datos (`TarjetaProducto.jsx`)

En el archivo `src/02-props/TarjetaProducto.jsx` podemos encontrar:

```jsx
export default function TarjetaProducto({ titulo, precio, enStock, etiquetas }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', maxWidth: '300px' }}>
      <h4>{titulo}</h4>
      <p><strong>Precio:</strong> ${precio} USD</p>
      
      {/* Renderizado condicional basado en prop booleana */}
      <p style={{ color: enStock ? 'green' : 'red' }}>
        {enStock ? 'En Stock' : 'Agotado'}
      </p>

      {/* Renderizado de array de etiquetas */}
      {etiquetas && etiquetas.length > 0 && (
        <div>
          <small>Categorías: {etiquetas.join(', ')}</small>
        </div>
      )}
    </div>
  );
}
```

---

### Reutilización pasando diferentes Props (`DemoProps.jsx`)

En el archivo `src/02-props/DemoProps.jsx` podemos encontrar:

```jsx
import MensajeBienvenida from './MensajeBienvenida';
import TarjetaProducto from './TarjetaProducto';

export default function DemoProps() {
  return (
    <section>
      <h2>Demostración de Props y Reutilización</h2>

      {/* 1. Mismo componente, distintas props */}
      <MensajeBienvenida nombre="Carlos" rol="Profesor" />
      <MensajeBienvenida nombre="Sofía" /> {/* Toma el rol por defecto */}

      <hr style={{ margin: '1.5rem 0' }} />

      <h3>Catálogo de Productos</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* 2. Instanciación múltiple de TarjetaProducto */}
        <TarjetaProducto 
          titulo="Teclado Mecánico RGB" 
          precio={85} 
          enStock={true} 
          etiquetas={['Periféricos', 'Gaming']} 
        />

        <TarjetaProducto 
          titulo="Monitor 4K 27 pulgadas" 
          precio={320} 
          enStock={false} 
          etiquetas={['Monitores', 'Oficina']} 
        />

        <TarjetaProducto 
          titulo="Mouse Inalámbrico" 
          precio={45} 
          enStock={true} 
        />
      </div>
    </section>
  );
}
```