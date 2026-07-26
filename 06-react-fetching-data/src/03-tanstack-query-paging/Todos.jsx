import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const LIMIT = 10;

/**
 * Componente TODOs: obtiene TODOs (tareas) paginados desde la API usando TanStack Query.
 *
 * URL base: https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10
 *
 * Estructura de cada todo que devuelve la API:
 * {
 *   "userId": 1,
 *   "id": 11,
 *   "title": "vero rerum temporibus dolor",
 *   "completed": true
 * }
 *
 * Clave didáctica: la queryKey incluye [page] para que TanStack Query
 * trate cada página como una entrada separada en la caché.
 */
export default function Todos() {
  // useState para controlar la página actual
  const [page, setPage] = useState(1);

  const { data: todos, isLoading, error } = useQuery({
    // Al incluir page en la queryKey, cada página tiene su propia entrada en caché
    queryKey: ['todos', page],
    queryFn: () =>
      fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${LIMIT}`
      ).then((res) => res.json()),
  });

  if (isLoading) return <p className="loading-msg">Cargando todos...</p>;
  if (error) return <p className="error-msg">Error: {error.message}</p>;

  return (
    <div>
      <h3 style={{ marginTop: 0, color: '#0f172a' }}>
        Todos - Página {page}
      </h3>

      <div className="grid-container">
        {todos.map((todo) => (
          <article key={todo.id} className="item-card">
            <h4>#{todo.id} - {todo.title}</h4>
            <span className={todo.completed ? 'badge badge-success' : 'badge badge-info'}>
              {todo.completed ? '✓ Completado' : '⏳ Pendiente'}
            </span>
          </article>
        ))}
      </div>

      {/* Controles de paginación */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
        <button
          className="btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          ← Anterior
        </button>
        <button
          className="btn"
          onClick={() => setPage((p) => p + 1)}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
}
