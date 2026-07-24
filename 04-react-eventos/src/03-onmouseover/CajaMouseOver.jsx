export default function CajaMouseOver() {
  // Forma 1: Función declarada fuera del JSX
  function manejarMouseOverExterna(e) {
    console.log('Forma 1 (Externa): Mouse detectado en el elemento', e.target);
    alert('Forma 1 (Externa): Evento onMouseOver disparado en Caja 1');
  }

  return (
    <section className="card">
      <h2>3. Evento onMouseOver</h2>
      <p>El evento <code>onMouseOver</code> se dispara cuando el puntero del mouse ingresa sobre el área de un elemento HTML.</p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
        {/* Forma 1: Función declarada fuera */}
        <div
          onMouseOver={manejarMouseOverExterna}
          style={{
            padding: '1.5rem',
            border: '2px dashed #2563eb',
            borderRadius: '8px',
            backgroundColor: '#eff6ff',
            cursor: 'pointer',
            flex: '1',
            minWidth: '200px'
          }}
        >
          <strong>Caja 1 (Función Externa)</strong>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>Pasa el mouse para ejecutar onMouseOver (alert/console)</p>
        </div>

        {/* Forma 2: Función declarada dentro / inline */}
        <div
          onMouseOver={() => console.log('Forma 2 (Inline): Mouse sobre Caja 2 inline')}
          style={{
            padding: '1.5rem',
            border: '2px dashed #10b981',
            borderRadius: '8px',
            backgroundColor: '#ecfdf5',
            cursor: 'pointer',
            flex: '1',
            minWidth: '200px'
          }}
        >
          <strong>Caja 2 (Función Inline)</strong>
          <p style={{ margin: 0, fontSize: '0.85rem' }}>Pasa el mouse (revisa la consola F12)</p>
        </div>
      </div>
    </section>
  );
}
