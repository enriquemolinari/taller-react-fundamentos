import { useState } from 'react';

/**
 * Ejemplo 02: Demostración del uso de `useState` para manejar Estado en React.
 *
 * `useState` es un Hook de React que nos permite:
 * 1. Declarar una variable de estado que React preserva entre renders.
 * 2. Obtener una función modificadora (setter) que actualiza el valor Y le notifica a React que debe re-renderizar el componente.
 *
 * Sintaxis:
 * const [contador, setContador] = useState(0);
 * - `contador`: valor actual del estado.
 * - `setContador`: función para actualizar el estado.
 * - `0`: valor inicial.
 */

export default function ContadorEstado() {
  // Declaración del estado usando useState
  const [contador, setContador] = useState(0);

  function incrementar() {
    // Al llamar a setContador:
    // 1. React actualiza el valor interno del estado.
    // 2. Agenda un re-renderizado del componente para actualizar la UI.
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  function reiniciar() {
    setContador(0);
  }

  console.log(`[useState] El componente ContadorEstado se ha renderizado. Valor actual de contador: ${contador}`);

  return (
    <section className="card">
      <span className="badge badge-success">Forma Correcta: USO DE useState</span>
      <h2>2. Contador con Estado (`useState`)</h2>
      <p>
        Al usar <code>useState</code>, cada actualización mediante <code>setContador</code> desencadena un 
        <strong>re-renderizado del componente</strong>. React conserva la variable de estado intacta entre renders.
      </p>

      <div className="contador-display">
        Valor en UI: <span style={{ color: '#2563eb' }}>{contador}</span>
      </div>

      <div>
        <button className="btn" onClick={incrementar}>
          + Incrementar
        </button>
        <button className="btn btn-secondary" onClick={decrementar}>
          - Decrementar
        </button>
        <button className="btn btn-secondary" onClick={reiniciar}>
          Reiniciar
        </button>
      </div>

      <div className="logs-box">
        Cada clic llama a <code>setContador()</code>, provocando un re-renderizado del componente. Revisa la consola F12 para ver los renders.
      </div>
    </section>
  );
}
