export default function ComparativaVinculacion() {
  // Función declarada fuera (sin parámetros extra)
  function manejarClickSimple(e) {
    alert(`[Externa Simple] Recibe objeto de evento: e.type = ${e.type}`);
  }

  // Función declarada fuera (con parámetros custom)
  function manejarClickConParametro(e, nombre, id) {
    alert(`[Externa con Parámetro] Nombre: ${nombre}, ID: ${id}, Evento: ${e.type}`);
  }

  return (
    <section className="card">
      <h2>4. Comparativa: Declaración Fuera, con uso y sin uso de parámetros</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1rem' }}>

        {/* Opción A */}
        <div style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>A) Sin parametros, solo el parámetro 'event' implícito</h3>
          <pre style={{ backgroundColor: '#f1f5f9', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
            {`function handleClick(e) {
  alert(e.type);
}
return <button onClick={handleClick}>Enviar</button>;`}
          </pre>
          <button onClick={manejarClickSimple}>Click aquí</button>
        </div>

        {/* Opción B */}
        <div style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>B) Con pasaje de parámetros</h3>
          <pre style={{ backgroundColor: '#f1f5f9', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
            {`return (
  <button onClick={() => handleClickParam('Juan', 42)}>
    Enviar con Parámetros
  </button>
);`}
          </pre>
          {/* Para pasar argumentos se requiere envolver en arrow function inline */}
          <button onClick={(e) => manejarClickConParametro(e, 'Estudiante React', 101)}>
            Click aquí
          </button>
        </div>

      </div>
    </section>
  );
}
