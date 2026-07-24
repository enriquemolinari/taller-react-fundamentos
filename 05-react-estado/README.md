# 05. Estado en React (`useState`)

El **estado** en React representa los datos dinámicos que cambian con el tiempo dentro de un componente y que determinan lo que se dibuja en la pantalla (Interfaz de Usuario). Cuando el estado de un componente cambia, React automáticamente solicita un **re-renderizado** para reflejar esos cambios visualmente.

---

## Organización del Proyecto (`src/`)

El código de este módulo se encuentra estructurado en subcarpetas temáticas dentro de `src/`:

```text
src/
 ├── 01-variable-local/            # Demostración de por qué una variable local 'let' NO funciona para la UI
 │    └── ContadorVariableLocal.jsx
 ├── 02-usestate/                  # Demostración correcta del Hook useState y re-renderizados
 │    └── ContadorEstado.jsx
 ├── 03-comunicacion-estado/       # Comunicación entre Padre e Hijos (Menu, Body, Post, Users)
 │    ├── Home.jsx
 │    ├── Menu.jsx
 │    ├── Body.jsx
 │    ├── Post.jsx
 │    ├── Welcome.jsx
 │    └── Users.jsx
 ├── 04-estado-con-zustand/    # Estado global con Zustand
 │    ├── useVistaStore.js
 │    ├── MenuZustand.jsx
 │    ├── BodyZustand.jsx
 │    └── ContenedorZustand.jsx
 ├── App.jsx                       # Componente principal selector de demostraciones
 ├── main.jsx                      # Punto de entrada en React
 └── index.css                     # Estilos didácticos del módulo
```

---

## ¿Qué es el Estado y por qué NO funciona una variable local?

Una función componente de React se ejecuta completamente cada vez que se rinde o vuelve a renderizar. 

Si declaras una variable local tradicional dentro de la función (ej. `let contador = 0;`):
1. **No hay notificaciones a React**: Modificar la variable (`contador++`) modifica solo un valor en la memoria RAM de JavaScript. React no se entera de que ocurrió un cambio ni sabe que debe volver a dibujar el HTML en pantalla.
2. **Re-inicialización de variables**: Si el componente se vuelve a renderizar por otra razón, la función vuelve a ejecutarse desde la primera línea y la variable local se **reinicializa** a su valor inicial (`0`), perdiendo el valor previo.

---

## 1. Contador con Variable Local (`let`) — Demostración de error

Ubicación del archivo: [ContadorVariableLocal.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/05-react-estado/src/01-variable-local/ContadorVariableLocal.jsx)

### Código exacto:
```jsx
export default function ContadorVariableLocal() {
  // Variable local a la función del componente
  let contador = 0;

  function incrementar() {
    contador = contador + 1;
    // La variable cambia en memoria (se ve en la consola F12), pero la UI no se actualiza
    console.log(`[Variable Local] Valor actual de contador en memoria: ${contador}`);
  }

  return (
    <section className="card">
      <h2>1. Contador con Variable Local (`let`)</h2>
      <div className="contador-display">
        Valor en UI: <span>{contador}</span>
      </div>
      <button className="btn" onClick={incrementar}>
        Incrementar Variable Local
      </button>
    </section>
  );
}
```

---

## 2. Contador con `useState` — La Forma Correcta

Ubicación del archivo: [ContadorEstado.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/05-react-estado/src/02-usestate/ContadorEstado.jsx)

El Hook `useState` resuelve el problema guardando el valor fuera de la invocación de la función dentro del motor interno de React.

### Código exacto:
```jsx
import { useState } from 'react';

export default function ContadorEstado() {
  // useState devuelve una tupla [valorActual, funcionSetter]
  const [contador, setContador] = useState(0);

  function incrementar() {
    // setContador actualiza el valor y desencadena un re-renderizado
    setContador(contador + 1);
  }

  return (
    <section className="card">
      <h2>2. Contador con Estado (`useState`)</h2>
      <div className="contador-display">
        Valor en UI: <span>{contador}</span>
      </div>
      <button className="btn" onClick={incrementar}>
        + Incrementar
      </button>
    </section>
  );
}
```

---

## 3. Comunicación de Estado entre Componentes

Cuando dos componentes hermanos (como un menú de navegación y una zona de contenido principal) necesitan coordinarse, el estado debe **elevarse al componente Padre común** (técnica conocida como *Lifting State Up*).

Ubicación de los archivos:
- Contenedor Padre: [ContenedorComunicacion.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/05-react-estado/src/03-comunicacion-estado/ContenedorComunicacion.jsx)
- Menú Navegador: [Menu.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/05-react-estado/src/03-comunicacion-estado/Menu.jsx)
- Contenido Body: [Body.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/05-react-estado/src/03-comunicacion-estado/Body.jsx)
- Consumo API Posts: [Post.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/05-react-estado/src/03-comunicacion-estado/Post.jsx)
- Consumo API Users: [Users.jsx](file:///home/enrique/workspaces/taller-react-fundamentos/05-react-estado/src/03-comunicacion-estado/Users.jsx)

### Ejemplo exacto del Padre (`ContenedorComunicacion.jsx`):
```jsx
import { useState } from 'react';
import Menu from './Menu';
import Body from './Body';

export default function ContenedorComunicacion() {
  // El estado vive en el padre
  const [vistaActiva, setVistaActiva] = useState('posts');

  function cambiarVista(nuevaVista) {
    setVistaActiva(nuevaVista);
  }

  return (
    <section className="card">
      <h2>3. Comunicación de Estado entre Componentes</h2>
      {/* Se pasan el estado y el handler al Menú */}
      <Menu vistaActiva={vistaActiva} alSeleccionarVista={cambiarVista} />
      {/* Se pasa la prop vistaActiva al Body */}
      <Body vistaActiva={vistaActiva} />
    </section>
  );
}
```

---

## 4. Estado con Zustand (`04-estado-con-zustand`)

En la carpeta `src/04-estado-con-zustand/` encontrarás el mismo problema anterior pero implementado utilizando Zustand. En lugar de utilizar la estrategia de elevación de estado (lifting state up), se utiliza Zustand para gestionar el estado global de la aplicación.

Instalación:
```bash
npm install zustand
```
