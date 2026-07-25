import { useQuery } from '@tanstack/react-query';

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

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    // retry: 0 → falla rápido sin reintentos. Por defecto hay 3 intentos.
    retry: 0,
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) {
        throw new Error(`Error HTTP: ${res.status}`);
      }
      return res.json();
    },
  })

  if (isLoading) {
    return <p className="loading-msg">Cargando usuarios desde la API...</p>;
  }

  if (error) {
    return <p className="error-msg">Error al cargar los usuarios: {error.message}</p>;
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
