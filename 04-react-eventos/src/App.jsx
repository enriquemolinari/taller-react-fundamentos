import BotonEvento from './01-onclick-boton/BotonEvento';
import EnlaceEvento from './02-onclick-enlace/EnlaceEvento';
import CajaMouseOver from './03-onmouseover/CajaMouseOver';
import ComparativaVinculacion from './04-comparativa-vinculacion/ComparativaVinculacion';

export default function App() {
  return (
    <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>Eventos en React</h1>
        <p style={{ color: '#64748b' }}>
          Manejo de <code>onClick</code> en botones y enlaces, <code>onMouseOver</code> y comparativa de funciones fuera vs. inline en JSX.
        </p>
      </header>

      {/* Renderizado de demostraciones (sin uso de estado o hooks) */}
      <BotonEvento />
      <EnlaceEvento />
      <CajaMouseOver />
      <ComparativaVinculacion />
    </main>
  );
}
