import { useVistaStore } from './useVistaStore';

export default function Menu({ vistaActiva }) {
  //desde aca voy a cambiar el estado con lo cual me quedo aca con la funcion que lo permite cambiar
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
