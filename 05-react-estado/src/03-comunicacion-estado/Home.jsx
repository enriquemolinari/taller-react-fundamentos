import { useState } from 'react';
import Menu from './Menu';
import Body from './Body';

/**
 * Ejemplo 03: Comunicación de Estado entre Componentes (Lifting State Up).
 *
 * Concepto clave:
 * Cuando dos o más componentes hermanos (como Menu y Body) necesitan compartir o reaccionar
 * al mismo estado (saber qué opción está seleccionada), elevamos el estado a su ancestro
 * común más cercano (este componente Home).
 *
 * El contenedor padre (Home):
 * 1. Declara el estado: `const [vistaActiva, setVistaActiva] = useState('welcome');`
 * 2. Le pasa `vistaActiva` y el handler `setVistaActiva` por props a `Menu`.
 * 3. Le pasa `vistaActiva` por props a `Body` para que sepa qué componente renderizar (`Welcome`, `Post` o `Users`).
 */
export default function Home() {
  const [vistaActiva, setVistaActiva] = useState('welcome');

  // Handler enviado como prop a Menu para modificar el estado del padre desde un hijo
  function cambiarVista(nuevaVista) {
    console.log(`[Comunicación de Estado] El menú solicitó cambiar a la vista: ${nuevaVista}`);
    setVistaActiva(nuevaVista);
  }

  return (
    <section className="card">
      <span className="badge badge-success">Elevación de Estado (Lifting State Up)</span>
      <h2>3. Comunicación de Estado entre Componentes</h2>
      <p>
        El estado <code>vistaActiva</code> vive en este componente Padre (<code>Home</code>).
        Pasa el estado al <code>Body</code> para saber qué mostrar y pasa la función <code>alSeleccionarVista</code> al <code>Menu</code> para que el hijo pueda actualizar el estado del padre.
      </p>

      {/* Renderizamos el Menú pasando el estado actual y la función handler */}
      <Menu vistaActiva={vistaActiva} alSeleccionarVista={cambiarVista} />

      {/* Renderizamos el Body que reaccionará según la prop vistaActiva */}
      <Body vistaActiva={vistaActiva} />
    </section>
  );
}
