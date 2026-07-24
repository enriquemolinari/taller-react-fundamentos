export default function BotonEvento() {
  // Forma 1: Declaración fuera del JSX (Manejador definido en el scope del componente)
  function handleClickExterno() {
    alert('Forma 1 ejecutada: Función declarada fuera de la definición JSX');
  }

  return (
    <section className="card">
      <h2>1. Evento onClick en un Botón (<code>&lt;button&gt;</code>)</h2>
      <p>Demostración de las dos formas de vincular la función al evento:</p>

      <div style={{ marginTop: '1rem' }}>
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
