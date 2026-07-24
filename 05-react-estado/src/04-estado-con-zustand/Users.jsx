import { useState, useEffect } from 'react';

/**
 * Componente Users: Consume la API de JSONPlaceholder para obtener usuarios.
 * Estructura de cada Usuario retornado por el API:
 * {
 *   "id": 1,
 *   "name": "Leanne Graham",
 *   "username": "Bret",
 *   "email": "Sincere@april.biz",
 *   "address": { ... },
 *   "phone": "...",
 *   "website": "...",
 *   "company": { ... }
 * }
 */
export default function Users() {
  const users = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "[EMAIL_ADDRESS]",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "[EMAIL_ADDRESS]",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "sheree.tv",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "[EMAIL_ADDRESS]",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "angie.com",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      },
    },
    {
      "id": 4,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "[EMAIL_ADDRESS]",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  ];

  return (
    <div>
      <h3 style={{ marginTop: 0, color: '#0f172a' }}>Usuarios Registrados (Users)</h3>
      <div className="grid-container">
        {users.map((user) => (
          <article key={user.id} className="item-card">
            <h4>{user.name} (@{user.username})</h4>
            <div className="user-info">
              <span><strong>Email:</strong> {user.email}</span>
              <span><strong>Teléfono:</strong> {user.phone}</span>
              <span><strong>Sitio Web:</strong> {user.website}</span>
              <span><strong>Compañía:</strong> {user.company?.name}</span>
              <span><strong>Ciudad:</strong> {user.address?.city}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
