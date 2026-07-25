import { useQuery } from '@tanstack/react-query';

/**
 * Componente Post: obtiene posts desde la API real usando useEffect.
 *
 * Antes, los datos estaban hardcodeados en el componente.
 * Ahora los cargamos desde: https://jsonplaceholder.typicode.com/posts
 *
 * Estructura de cada post que devuelve la API:
 * {
 *   "userId": 1,
 *   "id": 1,
 *   "title": "sunt aut facere...",
 *   "body": "quia et suscipit..."
 * }
 */
export default function Post() {
  //data: posts significa que a la data que devuelve useQuery le ponemos el alias posts
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()),
    // 1 minuto en cache, no hace el resquest hasta que pase el tiempo
    // o se invalide explícitamente con queryClient.invalidateQueries({ queryKey: ['posts'] })
    staleTime: 1 * 60 * 1000
  });

  if (isLoading) {
    return <p className="loading-msg">Cargando publicaciones desde la API...</p>;
  }

  if (error) {
    return <p className="error-msg">Error al cargar los posts: {error.message}</p>;
  }

  return (
    <div>
      <h3 style={{ marginTop: 0, color: '#0f172a' }}>Publicaciones (Posts)</h3>
      <div className="grid-container">
        {posts.map((post) => (
          <article key={post.id} className="item-card">
            <h4>#{post.id} - {post.title}</h4>
            <p>{post.body}</p>
            <span className="user-info">ID Usuario Autor: {post.userId}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
