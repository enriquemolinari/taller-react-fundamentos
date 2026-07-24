import ContadorVariableLocal from './01-variable-local/ContadorVariableLocal';
import ContadorEstado from './02-usestate/ContadorEstado';
import Home from './03-comunicacion-estado/Home';
import ContenedorZustand from './04-estado-con-zustand/ContenedorZustand';


export default function App() {
  return (
    <main style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>05 - Estado en React</h1>
        <p style={{ color: '#64748b' }}>
          Aprende qué es el estado, por qué fallan las variables locales, cómo funciona <code>useState</code>, re-renderizados, elevación de estado y preparación para Zustand.
        </p>
      </header>

      {/* Demostración 1: Variable Local (Por qué NO funciona) */}
      {/* <ContadorVariableLocal /> */}

      {/* Demostración 2: useState (Forma correcta) */}
      {/* <ContadorEstado /> */}

      {/* Demostración 3: Comunicación de Estado entre Componentes con useState y Props */}
      <Home />

      {/* Demostración 4: Estructura preparada para ejercicio con Zustand */}
      {/* <ContenedorZustand /> */}
    </main>
  );
}
