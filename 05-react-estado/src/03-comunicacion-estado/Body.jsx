import Post from './Post';
import Users from './Users';
import Welcome from './Welcome';

/**
 * Componente Body: Renderiza dinámicamente el componente `Welcome`, `Post` o `Users`
 * en función del estado que recibe como prop del componente padre.
 *
 * Recibe como prop:
 * - `vistaActiva`: 'welcome' | 'posts' | 'users'
 */
export default function Body({ vistaActiva }) {
  return (
    <div className="body-container">
      {vistaActiva === 'welcome' && <Welcome />}
      {vistaActiva === 'posts' && <Post />}
      {vistaActiva === 'users' && <Users />}
    </div>
  );
}
