export default function TarjetaProducto({ titulo, precio, enStock, etiquetas }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem', borderRadius: '8px', maxWidth: '300px' }}>
      <h4>{titulo}</h4>
      <p><strong>Precio:</strong> ${precio}</p>

      {/* Renderizado condicional basado en una prop booleana */}
      <p style={{ color: enStock ? 'green' : 'red' }}>
        {enStock ? '✓ En Stock' : '✗ Agotado'}
      </p>

      {/* Si se reciben etiquetas (array), las mostramos */}
      {etiquetas && etiquetas.length > 0 && (
        <div>
          <small>Categorías: {etiquetas.join(', ')}</small>
        </div>
      )}
    </div>
  );
}
