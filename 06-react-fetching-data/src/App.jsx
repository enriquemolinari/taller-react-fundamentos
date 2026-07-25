import Home from './01-useeffect-fetching/Home';

export default function App() {
  return (
    <main style={{ maxWidth: '960px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>06 - Fetching Data en React</h1>
        <p style={{ color: '#64748b' }}>
          Aprende qué son los efectos de lado, por qué existe <code>useEffect</code>,
          y cómo usarlo para consumir APIs REST. Próximamente: React TanStack Query.
        </p>
      </header>

      {/* Demostración: useEffect para consumir APIs */}
      <Home />
    </main>
  );
}
