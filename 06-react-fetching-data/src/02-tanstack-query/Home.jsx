import Menu from './Menu';
import Body from './Body';
import { useVistaStore } from './useVistaStore';

export default function Home() {
  // Obtenemos la vista activa directamente del store de Zustand.
  // No necesitamos pasar esta información entre componentes mediante props.
  const vistaActiva = useVistaStore((state) => state.vistaActiva);

  return (
    <section className="card">
      <span className="badge badge-info">TanStack Query + Zustand</span>
      <h2>Fetching Data con TanStack Query</h2>
      <p>
        Los componentes <code>Post</code> y <code>Users</code> ahora obtienen sus datos
        desde la API real usando <code>useQuery</code> de TanStack Query. El estado de
        navegación sigue siendo manejado por Zustand.
      </p>

      <Menu vistaActiva={vistaActiva} />
      <Body vistaActiva={vistaActiva} />
    </section>
  );
}
