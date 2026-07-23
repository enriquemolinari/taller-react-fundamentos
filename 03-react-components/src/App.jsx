// Demo 1: Concepto de Componentes, Instanciación y Expresiones JSX
//import DemoComponentesYJsx from './01-componentes-y-jsx/DemoComponentesYJsx';

// Demo 2: Props, Desestructuración y Reutilización
import DemoProps from './02-props/DemoProps';

export default function App() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      {/* Muestra Demo 1 */}
      {/*<DemoComponentesYJsx />*/}

      {/* Muestra Demo 2 (descomentar para la segunda parte de la clase) */}
      <DemoProps />
    </main>
  );
}
