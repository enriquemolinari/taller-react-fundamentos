import MensajeBienvenida from './MensajeBienvenida';
import TarjetaProducto from './TarjetaProducto';

export default function DemoProps() {
  return (
    <section>
      <h2>Demostración de Props y Reutilización</h2>

      {/* Reutilizando MensajeBienvenida pasando distintas props */}
      <MensajeBienvenida nombre="Carlos" rol="Profesor" />
      <MensajeBienvenida nombre="Sofía" /> {/* Usa el rol por defecto 'Estudiante' */}

      <hr style={{ margin: '1.5rem 0' }} />

      <h3>Catálogo de Productos</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {/* Instanciando TarjetaProducto múltiples veces con datos diferentes */}
        <TarjetaProducto 
          titulo="Teclado Mecánico RGB" 
          precio={85} 
          enStock={true} 
          etiquetas={['Periféricos', 'Gaming']} 
        />

        <TarjetaProducto 
          titulo="Monitor 4K 27 pulgadas" 
          precio={320} 
          enStock={false} 
          etiquetas={['Monitores', 'Oficina']} 
        />

        <TarjetaProducto 
          titulo="Mouse Inalámbrico" 
          precio={45} 
          enStock={true} 
        />
      </div>
    </section>
  );
}
