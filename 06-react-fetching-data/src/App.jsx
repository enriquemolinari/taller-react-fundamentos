// import Home from './01-useeffect-fetching/Home';
// import Home from './02-tanstack-query/Home';
import Todos from './03-tanstack-query-paging/Todos';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <main style={{ maxWidth: '960px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#1e293b', marginBottom: '0.5rem' }}>06 - Fetching Data en React</h1>
        <p style={{ color: '#64748b' }}>
          Utilizando <code>useEffect</code> y <code>TanStack Query</code> para consumir servicios HTTP.
        </p>
      </header>

      {/* Demostración: useEffect para consumir APIs */}
      {/* <Home /> */}

      {/* Demostración: TanStack Query para consumir APIs */}
      {/* <QueryClientProvider client={queryClient}><Home /></QueryClientProvider> */}

      {/* Demostración: TanStack Query con paginación */}
      <QueryClientProvider client={queryClient}>
        <Todos />
      </QueryClientProvider>
    </main>
  );
}
