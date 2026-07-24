# 04. Eventos en React

El manejo de eventos en React permite capturar las interacciones del usuario (clicks, movimientos del mouse, pulsación de teclas, etc.) para responder ejecutando funciones en la aplicación.

---

## Organización del Proyecto (`src/`)

El código de este módulo se encuentra estructurado en subcarpetas temáticas dentro de `src/`:

```text
src/
 ├── 01-onclick-boton/               # Ejemplo de onClick en botones (<button>)
 │    └── BotonEvento.jsx
 ├── 02-onclick-enlace/              # Ejemplo de onClick en enlaces (<a>) e interceptación con e.preventDefault()
 │    └── EnlaceEvento.jsx
 ├── 03-onmouseover/                 # Ejemplo del evento onMouseOver en elementos contenedores
 │    └── CajaMouseOver.jsx
 ├── 04-comparativa-vinculacion/     # Demostración comparativa de vincular funciones fuera vs. dentro de JSX
 │    └── ComparativaVinculacion.jsx
 ├── App.jsx                         # Componente principal que integra las demostraciones
 ├── main.jsx                        # Punto de entrada de la aplicación en React
 └── index.css                       # Estilos globales y reglas CSS de las demos
```

---

## Conceptos Clave de los Eventos en React

1. **Sintaxis camelCase**: En HTML los eventos se escriben en minúsculas (ej. `onclick`, `onmouseover`). En React/JSX se utiliza convencionalmente camelCase (`onClick`, `onMouseOver`).
2. **Pasar Funciones, no Invocaciones**: A los eventos de React se les asigna una función como manejador (`onClick={handleClick}` o `onClick={() => handleClick()}`). Si escribes `onClick={handleClick()}`, la función se ejecutará inmediatamente durante el renderizado en lugar de cuando el usuario haga clic.

---

## 1. Evento `onClick` en un Botón (`<button>`)

En React, el evento `onClick` detecta los clics del usuario en un botón.

Ubicación del archivo: [BotonEvento.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/04-react-eventos/src/01-onclick-boton/BotonEvento.jsx)

### Ejemplo de código exacto:

```jsx
export default function BotonEvento() {
  // Forma 1: Declaración fuera del JSX (Manejador definido en el scope del componente)
  function handleClickExterno() {
    alert('Forma 1 ejecutada: Función declarada fuera de la definición JSX');
  }

  return (
    <section className="card">
      <h2>1. Evento onClick en un Botón (<code>&lt;button&gt;</code>)</h2>
      <p>Demostración de las dos formas de vincular la función al evento:</p>

      <div>
        {/* Forma 1: Se pasa la referencia de la función definida fuera de JSX */}
        <button onClick={handleClickExterno}>
          Forma 1: Función Externa
        </button>

        {/* Forma 2: Función definida dentro (inline) en el JSX */}
        <button onClick={() => alert('Forma 2 ejecutada: Función declarada inline dentro de JSX')}>
          Forma 2: Función Inline
        </button>
      </div>
    </section>
  );
}
```

---

## 2. Evento `onClick` en un Enlace/Link (`<a>`)

Los elementos `<a>` por defecto provocan una recarga o redirección de página al hacer clic. Para interceptar esta navegación en una SPA (Single Page Application) de React, utilizamos `event.preventDefault()`.

Ubicación del archivo: [EnlaceEvento.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/04-react-eventos/src/02-onclick-enlace/EnlaceEvento.jsx)

### Ejemplo de código exacto:

```jsx
export default function EnlaceEvento() {
  // Forma 1: Función declarada fuera de la JSX
  function manejarClickEnlace(event) {
    event.preventDefault(); // Evita que el navegador abra el href="https://react.dev"
    alert('Forma 1 (Externa): Navegación interceptada con event.preventDefault()');
  }

  return (
    <section className="card">
      <h2>2. Evento onClick en un Enlace (<code>&lt;a&gt;</code>)</h2>

      {/* Forma 1 */}
      <a href="https://react.dev" onClick={manejarClickEnlace} className="btn-link">
        Enlace (Función Externa)
      </a>

      {/* Forma 2 */}
      <a
        href="https://react.dev"
        onClick={(e) => {
          e.preventDefault();
          alert('Forma 2 (Inline): Interceptado mediante arrow function directa');
        }}
        className="btn-link"
      >
        Enlace (Función Inline)
      </a>
    </section>
  );
}
```

---

## 3. Evento `onMouseOver`

El evento `onMouseOver` se activa cuando el puntero del mouse se posiciona sobre la superficie de un elemento HTML.

Ubicación del archivo: [CajaMouseOver.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/04-react-eventos/src/03-onmouseover/CajaMouseOver.jsx)

### Ejemplo de código exacto:

```jsx
export default function CajaMouseOver() {
  // Forma 1: Función externa
  function manejarMouseOverExterna(e) {
    console.log('Forma 1 (Externa): Mouse detectado en el elemento', e.target);
    alert('Forma 1 (Externa): Evento onMouseOver disparado en Caja 1');
  }

  return (
    <section className="card">
      <h2>3. Evento onMouseOver</h2>

      {/* Forma 1: Pasando referencia de la función */}
      <div onMouseOver={manejarMouseOverExterna}>
        Caja 1 (Función Externa)
      </div>

      {/* Forma 2: Pasando arrow function inline */}
      <div onMouseOver={() => console.log('Forma 2 (Inline): Mouse sobre Caja 2 inline')}>
        Caja 2 (Función Inline)
      </div>
    </section>
  );
}
```

---

## 4. Comparativa: Declaración Fuera vs. Dentro (Inline) del JSX

Existen dos formas principales de vincular un evento con su función manejadora en React:

Ubicación del archivo: [ComparativaVinculacion.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/04-react-eventos/src/04-comparativa-vinculacion/ComparativaVinculacion.jsx)

| Criterio | Forma 1: Función Declarada Fuera de JSX | Forma 2: Función Declarada Inline Dentro de JSX |
| :--- | :--- | :--- |
| **Sintaxis** | `<button onClick={handleClick}>` | `<button onClick={() => handleClick(id)}>` |
| **Cuándo usarla** | Cuando la lógica es extensa, se reutiliza en varios elementos, o no requiere argumentos extra. | Para acciones inmediatas de 1 línea (`alert('Hola')`) o para pasar argumentos personalizados. |
| **Legibilidad del JSX** | **Alta**: Mantiene la plantilla HTML/JSX limpia y legible. | **Media/Baja**: Si la lógica tiene muchas líneas, ensucia el marcado visual. |
| **Paso de Parámetros** | El navegador le pasa implícitamente el objeto `event` (`e`). | Permite pasar parámetros personalizados de manera directa: `() => eliminar(item.id)`. |
| **Rendimiento** | La referencia a la función se mantiene constante entre ejecuciones. | Crea una nueva instancia de función en cada renderizado. |
