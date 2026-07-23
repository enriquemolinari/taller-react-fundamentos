import Encabezado from './Encabezado';
import PerfilUsuario from './PerfilUsuario';

export default function DemoComponentesYJsx() {
  return (
    <section>
      {/* Instanciación de componentes propios en PascalCase */}
      <Encabezado />
      <PerfilUsuario />
    </section>
  );
}
