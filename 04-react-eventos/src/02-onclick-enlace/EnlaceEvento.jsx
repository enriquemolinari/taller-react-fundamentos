export default function EnlaceEvento() {
  // Forma 1: Función declarada fuera de la JSX
  function manejarClickEnlace(event) {
    // Previene la navegación por defecto del enlace <a>
    event.preventDefault();
    alert('Forma 1 (Externa): Navegación interceptada con event.preventDefault()');
  }

  return (
    <section className="card">
      <h2>2. Evento onClick en un Enlace (<code>&lt;a&gt;</code>)</h2>
      <p>
        Los enlaces navegan por defecto a la URL de su atributo <code>href</code>. En React se usa 
        <code>e.preventDefault()</code> para interceptar este comportamiento.
      </p>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Forma 1: Función declarada fuera del JSX */}
        <a href="https://react.dev" onClick={manejarClickEnlace} className="btn-link">
          Enlace (Función Externa)
        </a>

        {/* Forma 2: Función declarada inline dentro del JSX */}
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
      </div>
    </section>
  );
}
