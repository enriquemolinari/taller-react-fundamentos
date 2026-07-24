import Menu from './Menu';
import Body from './Body';
import { useVistaStore } from './useVistaStore';

export default function Home() {
  // const [vistaActiva, setVistaActiva] = useState('welcome');
  // Al hacer esto estoy declarando que este componente se va a renderizar (y por lo tanto sus hijos) 
  // siempre que cambie vistaActiva
  const vistaActiva = useVistaStore((state) => state.vistaActiva);

  // Handler enviado como prop a Menu para modificar el estado del padre desde un hijo
  // No hace mas falta...
  // function cambiarVista(nuevaVista) {
  //   console.log(`[Comunicación de Estado] El menú solicitó cambiar a la vista: ${nuevaVista}`);
  //   setVistaActiva(nuevaVista);
  // }

  return (
    <section className="card">
      <span className="badge badge-success">Estado con Zustand</span>
      <h2>4. Comunicación de Estado entre Componentes usando Zustand</h2>
      <p>
        El estado <code>vistaActiva</code> lo puedo obtener desde donde quiera, usando el hook <code>useVistaStore</code>.
      </p>

      {/* Renderizamos el Menú pasando el estado actual y la función handler */}
      <Menu vistaActiva={vistaActiva} />

      {/* Renderizamos el Body que reaccionará según la prop vistaActiva */}
      <Body vistaActiva={vistaActiva} />
    </section >
  );
}
