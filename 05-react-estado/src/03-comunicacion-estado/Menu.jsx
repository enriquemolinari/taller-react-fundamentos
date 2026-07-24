/**
 * Componente Menu: Presenta los botones/links para alternar la vista entre Posts y Users.
 *
 * Recibe como props:
 * - `vistaActiva`: el valor actual del estado guardado en el padre ('posts' o 'users').
 * - `alSeleccionarVista`: función manejadora enviada por el padre para cambiar el estado.
 */
export default function Menu({ vistaActiva, alSeleccionarVista }) {
  return (
    <nav className="menu-nav">
      <button
        className={`menu-link ${vistaActiva === 'welcome' ? 'active' : ''}`}
        onClick={() => alSeleccionarVista('welcome')}
      >
        Welcome
      </button>

      <button
        className={`menu-link ${vistaActiva === 'posts' ? 'active' : ''}`}
        onClick={() => alSeleccionarVista('posts')}
      >
        Publicaciones (Posts)
      </button>

      <button
        className={`menu-link ${vistaActiva === 'users' ? 'active' : ''}`}
        onClick={() => alSeleccionarVista('users')}
      >
        Usuarios (Users)
      </button>
    </nav>
  );
}
