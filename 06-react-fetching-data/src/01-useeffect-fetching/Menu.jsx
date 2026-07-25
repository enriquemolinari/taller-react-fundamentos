import { useVistaStore } from './useVistaStore';

export default function Menu({ vistaActiva }) {
  // Obtenemos la función para cambiar la vista desde el store de Zustand
  const cambiarVista = useVistaStore((state) => state.cambiarVista);

  return (
    <nav className="menu-nav">
      <button
        className={`menu-link ${vistaActiva === 'welcome' ? 'active' : ''}`}
        onClick={() => cambiarVista('welcome')}
      >
        Welcome
      </button>

      <button
        className={`menu-link ${vistaActiva === 'posts' ? 'active' : ''}`}
        onClick={() => cambiarVista('posts')}
      >
        Publicaciones (Posts)
      </button>

      <button
        className={`menu-link ${vistaActiva === 'users' ? 'active' : ''}`}
        onClick={() => cambiarVista('users')}
      >
        Usuarios (Users)
      </button>
    </nav>
  );
}
