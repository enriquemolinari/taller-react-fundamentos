/**
 * Ejemplo 01: Demostración de por qué una Variable Local NO funciona para mantener estado en React.
 *
 * En JavaScript estándar, podemos declarar `let contador = 0;` e incrementarla en una función.
 * Sin embargo, en React:
 * 1. La modificación de una variable local no le avisa a React que debe volver a renderizar (re-render) la UI.
 * 2. Aunque la variable cambie su valor en memoria, la pantalla seguirá mostrando el valor inicial.
 * 3. Si por alguna razón el componente se re-renderiza, las variables locales se vuelven a inicializar desde cero.
 */

export default function ContadorVariableLocal() {
  // Variable local a la función del componente
  let contador = 0;

  function incrementar() {
    contador = contador + 1;
    // La variable cambia en memoria, lo verificamos por la consola del navegador
    console.log(`[Variable Local] Valor actual de contador en memoria: ${contador}`);

    // Modificamos el DOM explícitamente (usando el estado como se debe de esto se encarga React)
    const logElement = document.getElementById('log-variable-local');
    if (logElement) {
      logElement.innerText = `Log en vivo (DOM): Variable en memoria vale ${contador}, pero la UI renderizada abajo NO cambia.`;
    }
  }

  return (
    <section className="card">
      <span className="badge badge-error">Demostración: LO QUE NO FUNCIONA</span>
      <h2>1. Contador con Variable Local (`let`)</h2>
      <p>
        Al hacer clic en el botón, la variable local <code>contador</code> se incrementa en memoria (revisa la consola <code>F12</code>),
        pero React <strong>no detecta el cambio</strong> ni solicita un re-renderizado del componente.
        En el LOG en vivo del DOM estamos realizando una actualización del DOM explícitamente como haciamos antes de React con JQuery.
      </p>

      <div className="contador-display">
        Valor en UI: <span>{contador}</span>
      </div>

      <button className="btn" onClick={incrementar}>
        Incrementar Variable Local
      </button>

      <div id="log-variable-local" className="logs-box">
        Haz clic en el botón y observa la consola del navegador (F12).
      </div>
    </section>
  );
}
