# Curso sobre Fundamentos de React

Estes es un proyecto *npm* monorepo utilizando [npm workspaces](https://docs.npmjs.com/cli/v11/using-npm/workspaces#using-workspaces). Cada carpeta dentro es un proyecto diferente que puede ser ejecutado de manera independiente (la aplicacion y los tests). La carpeta node_modules es compartida entre todos los proyectos, cuando instalo una depedencia en cada proyecto, esta se instala en la carpeta node_modules de la raiz del monorepo.

## Estructura del Curso

- **[01 - Fundamentos de JavaScript](01-js-fundamentos/README.md)**: Conceptos básicos de JavaScript incluyendo funciones (tradicionales, flecha y anónimas) y destructuring de arrays y objetos.

- **[02 - React con Vite](02-react-with-vite/README.md)**: Configuración inicial de un proyecto React utilizando Vite como herramienta de construcción para un desarrollo rápido y optimizado.

- **[03 - Componentes en React](03-react-components/README.md)**: Creación y uso de componentes en React, la construcción sintáctica fundamental para construir interfaces de usuario.

- **[04 - Eventos en React](04-react-eventos/README.md)**: Manejo de eventos en React, cubriendo `onClick` en botones y enlaces, `onMouseOver` y comparativa de funciones declaradas fuera e inline.

- **[05 - Estado en React](05-react-estado/README.md)**: Manejo de estado en React, por qué no funcionan las variables locales, el uso de `useState`, re-renderizados, comunicación de estado mediante props/handlers y manejo de estados con la librería `Zustand`.

- **[06 - Fetching data en React](06-react-fetching-data/README.md)**: Manejo de fetching de datos en React, efectos de lado, por qué usar `useEffect`. Uso de `TanStack Query` para fetches mas optimizados y un approach declarativo del estado de carga, error y datos.

## Extensiones recomendadas para Visual Studio Code

- Format on Save habilitado
- ESLint
- ES7 + React/Redux/React-Native snippets

