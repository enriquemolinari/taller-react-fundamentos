import Post from './Post';
import Users from './Users';
import Welcome from './Welcome';

export default function Body({ vistaActiva }) {
  return (
    <div className="body-container">
      {vistaActiva === 'welcome' && <Welcome />}
      {vistaActiva === 'posts' && <Post />}
      {vistaActiva === 'users' && <Users />}
    </div>
  );
}
