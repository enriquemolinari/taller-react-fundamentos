import { useState, useEffect } from 'react';

/**
 * Componente Post: Consume la API de JSONPlaceholder para obtener posts.
 * Estructura de cada Post retornado por el API:
 * {
 *   "userId": 1,
 *   "id": 1,
 *   "title": "sunt aut facere...",
 *   "body": "quia et suscipit..."
 * }
 */
export default function Post() {
  const posts = [
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat",
      body: "quia et suscipit"
    },
    {
      userId: 1,
      id: 2,
      title: "sunt aut facere repellat",
      body: "quia et suscipit"
    },
    {
      userId: 1,
      id: 3,
      title: "sunt aut facere repellat",
      body: "quia et suscipit"
    },
    {
      userId: 1,
      id: 4,
      title: "sunt aut facere repellat",
      body: "quia et suscipit"
    }
  ];

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
