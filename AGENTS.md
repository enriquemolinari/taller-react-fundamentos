# Reglas del Proyecto: Taller de React Fundamentos

Proyecto educativo universitario dividido en módulos secuenciales (`0N-nombre-modulo`).

## Estructura de Módulos
Cada módulo debe contener:
1. **Código ejecutable (`src/`)**: Organizado en subcarpetas temáticas (`01-concepto/`, `02-concepto/`, etc.), componentes reutilizables y un `App.jsx` que actúe como selector/interruptor de demostraciones.
2. **`README.md` explicativo**:
   - Árbol de la estructura de `src/`.
   - Explicación teórica clara de cada concepto con fragmentos de código del proyecto exactos.
   - Enlaces directos a las rutas de los archivos donde se implementa cada ejemplo.

## Principios para Nuevos Módulos
- **Claridad didáctica**: Código limpio, bien comentado, fácil de seguir para estudiantes.
- **Nombres explícitos**: PascalCase para componentes, funciones exportadas por defecto o nombradas según convención.
- **Ejemplos progresivos**: De conceptos básicos a casos combinados.

## Importante

NUNCA en un clase utilices algo de react que NO hayamos enseñado previamente. Por ejemplo, dentro del módulo sobre Eventos, no podemos usar useState ya que todavia no lo hemos enseñado.

No ejecutes nunca npm run build, porque se me acaban los tokens. Minimiza todo lo que puedas.