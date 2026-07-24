export default function ComparativaVinculacion() {
  // Función declarada fuera (sin parámetros extra)
  function manejarClickSimple(e) {
    alert(`[Externa Simple] Recibe objeto de evento: e.type = ${e.type}`);
  }

  // Función declarada fuera (con parámetros custom)
  function manejarClickConParametro(nombre, id) {
    alert(`[Externa con Parámetro] Nombre: ${nombre}, ID: ${id}`);
  }

  return (
    <section className="card">
      <h2>4. Comparativa: Declaración Fuera vs. Dentro de JSX</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        
        {/* Opción A */}
        <div style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>A) Función fuera de JSX</h3>
          <pre style={{ backgroundColor: '#f1f5f9', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
{`function handleClick(e) {
  alert(e.type);
}
return <button onClick={handleClick}>Enviar</button>;`}
          </pre>
          <button onClick={manejarClickSimple}>Probar Referencia Directa</button>
          <ul>
            <li><strong>Reutilizable:</strong> Se puede invocar en múltiples elementos.</li>
            <li><strong>Limpia:</strong> Mantiene la plantilla JSX legible.</li>
            <li><strong>Recibe event por defecto:</strong> Se pasa <code>e</code> implícitamente.</li>
          </ul>
        </div>

        {/* Opción B */}
        <div style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '6px' }}>
          <h3 style={{ marginTop: 0, color: '#1e293b' }}>B) Función dentro/inline en JSX</h3>
          <pre style={{ backgroundColor: '#f1f5f9', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
{`return (
  <button onClick={() => handleClickParam('Juan', 42)}>
    Enviar con Parámetros
  </button>
);`}
          </pre>
          {/* Para pasar argumentos se requiere envolver en arrow function inline */}
          <button onClick={() => manejarClickConParametro('Estudiante React', 101)}>
            Probar Inline con Argumentos
          </button>
          <ul>
            <li><strong>Conveniente para argumentos:</strong> Ideal si necesitas pasar un ID o dato adicional.</li>
            <li><strong>Rápida:</strong> Para líneas de código únicas o llamadas directas.</li>
            <li><strong>Instanciación:</strong> Crea una función nueva en cada renderizado.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
