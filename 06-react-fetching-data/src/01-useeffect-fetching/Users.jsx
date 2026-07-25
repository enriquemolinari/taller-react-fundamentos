import { useState, useEffect } from 'react';

/**
 * Componente Users: obtiene usuarios desde la API real usando useEffect.
 *
 * Antes, los datos estaban hardcodeados en el componente.
 * Ahora los cargamos desde: https://jsonplaceholder.typicode.com/users
 *
 * Estructura de cada usuario que devuelve la API:
 * {
 *   "id": 1,
 *   "name": "Leanne Graham",
 *   "username": "Bret",
 *   "email": "Sincere@april.biz",
 *   "address": { "street": "...", "city": "...", ... },
 *   "phone": "...",
 *   "website": "...",
 *   "company": { "name": "...", ... }
 * }
 */
export default function Users() {
  // Estado para almacenar los usuarios recibidos de la API.
  const [users, setUsers] = useState([]);

  // Estado para manejar la carga.
  const [cargando, setCargando] = useState(true);

  // Estado para capturar errores.
  const [error, setError] = useState(null);

  // useEffect con [] vacío: el fetch corre UNA SOLA VEZ, luego del primer renderizado.
  // Esto es idéntico al patrón del componente Post. Cada componente gestiona
  // su propio estado y su propio efecto de carga.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setUsers(datos);
        setCargando(false);
      })
      .catch((err) => {
        setError(err.message);
        setCargando(false);
      });
  }, []); // <-- [] significa: ejecutar solo una vez, al montar el componente

  if (cargando) {
    return <p className="loading-msg">Cargando usuarios desde la API...</p>;
  }

  if (error) {
    return <p className="error-msg">Error al cargar los usuarios: {error}</p>;
  }

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
