import { useState, useEffect } from 'react';

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
  // Estado para almacenar los posts recibidos de la API.
  // Arrancamos con un arreglo vacío, que React usará en el primer renderizado.
  const [posts, setPosts] = useState([]);

  // Estado para manejar la carga: mientras esperamos la respuesta de la API,
  // mostramos un mensaje al usuario.
  const [cargando, setCargando] = useState(true);

  // Estado para capturar si ocurrió algún error durante el fetch.
  const [error, setError] = useState(null);

  // useEffect nos permite ejecutar el fetch DESPUÉS de que React renderice el componente.
  // El fetch es un efecto de lado: puede fallar, tarda un tiempo, y su resultado
  // varía según el estado del servidor (no es una función pura).
  //
  // El segundo parámetro [] es el arreglo de dependencias.
  // Con [] vacío, este efecto se ejecuta UNA SOLA VEZ: justo después del primer renderizado.
  // Sin [], React volvería a ejecutarlo en cada re-renderizado, causando un loop infinito
  // (fetch → setState → re-render → fetch → setState → ...).
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setPosts(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []); // <-- [] significa: ejecutar solo una vez, al montar el componente

  if (cargando) {
    return <p className="loading-msg">Cargando publicaciones desde la API...</p>;
  }

  if (error) {
    return <p className="error-msg">Error al cargar los posts: {error}</p>;
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
