# Unit Testing en React para Agentes de IA

## Librerias de testing
- NO instales nada nuevo.
- Ya están instaladas las librerías necesarias para realizar unit tests en este proyecto:
  - Vitest
  - React Testing Library 
    - @testing-library/react
    - @testing-library/user-event
    - @testing-library/jest-dom
    - @testing-library/dom
  - Mock Service Worker (MSW)

## Reglas Principales de Testing

### 1. Enfocarse en el Comportamiento del Usuario (RTL First)
- **NO** testees detalles de implementación, el state interno del componente, métodos privados o estructuras arbitrarias del DOM.
- **SÍ** testea la aplicación exactamente de la misma forma en que un usuario interactúa con ella.
- **Selectores:** Prefiere siempre queries accesibles basadas en atributos semánticos. Usa `getByRole` combinado con `aria-label` para obtener elementos de forma confiable y específica. NUNCA uses regex en los selectores (ej., `{ name: /regex/i }`), siempre valores exactos. NUNCA busques por selectores CSS (`.class`, `#id`) a menos que se solicite explícitamente como último recurso.
- Utiliza la propiedad `data-testid` cuando sea imposible seleccionar el elemento mediante aria-label u otros atributos accesibles.
- **Expectations específicos:** Haz expects muy concretos sobre lo que esperas. Evita verificaciones genéricas como `toBeTruthy()`. En su lugar, verifica el contenido exacto, visibilidad o atributos específicos del elemento (ej., `expect(button).toHaveTextContent('Count is 3')`).
- Haz que los tests sean resilientes al refactoring interno. Si la experiencia del usuario no cambia, el test no debería romperse.

### 2. Aislar Unidades
- Asegúrate de que cada unit test se enfoque en un solo componente o funcionalidad de forma aislada.
- Usa mock service workers (MSW) para interceptar y controlar las peticiones de red, asegurando que los tests sean deterministas y no dependan de APIs o servicios externos.

### 2.1 Testing para Componentes con fetch/AJAX (MSW)
- Para cualquier componente que haga `fetch`, axios, React Query o cualquier conexión AJAX, usa MSW. No mockees `global.fetch` con `vi.spyOn` salvo que se pida explícitamente.
- Define handlers base en `setupServer(...)` para el comportamiento por defecto.
- Activa el server una sola vez con `beforeAll`.
- Usa `beforeEach` para resetear estado de datos/variables del test si aplica.
- Usa `afterEach` para `cleanup()` y `server.resetHandlers()` para evitar contaminación entre tests.
- Cierra el server con `afterAll`.

Ejemplo :

```jsx
const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/posts', () => {
    return HttpResponse.json([
      {
        userId: 7,
        id: 42,
        title: 'Testing title',
        body: 'Testing body',
      },
    ])
  })
)

beforeAll(() => {
  server.listen({ onUnhandledRequest: 'error' })
})

afterEach(() => {
  cleanup()
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

test('renders fetched post data in the table after loading', async () => {
  render(<WithAjax />)

  const table = await screen.findByRole('table')
  const row = await screen.findByRole('row', { name: '7 42 Testing title Testing body' })

  expect(table).toBeVisible()
  expect(within(row).getByRole('cell', { name: '7' })).toBeVisible()
  expect(within(row).getByRole('cell', { name: '42' })).toBeVisible()
  expect(within(row).getByRole('cell', { name: 'Testing title' })).toBeVisible()
  expect(within(row).getByRole('cell', { name: 'Testing body' })).toBeVisible()
})
```

Override de respuesta para un test especifico:

```jsx
test('shows empty table when API returns no posts', async () => {
  server.use(
    http.get('https://jsonplaceholder.typicode.com/posts', () => {
      return HttpResponse.json([])
    })
  )

  render(<WithAjax />)

  const table = await screen.findByRole('table')
  expect(table).toBeVisible()
})
```

Nota: `server.resetHandlers()` no borra los handlers base de `setupServer(...)`; solo elimina overrides hechos con `server.use(...)`.

### 3. Variaciones Exhaustivas de Props
- Al testear un componente, genera automáticamente test cases para diferentes combinaciones de props.
- Incluye happy paths, edge cases, estados por defecto y valores inválidos/nulos donde corresponda, para asegurar que el componente se comporte y renderice de manera predecible.

### 4. Simular Interacciones Reales del Usuario
- Testea siempre los elementos interactivos (botones, formularios, inputs, navegación).
- Usa `user-event` (preferido por sobre `fireEvent`) para simular el tipeo, los clicks y el envío de formularios.
- **Assertions claras:** Después de cada interacción, verifica el estado esperado con expectations específicos. Selecciona el elemento por su aria-label (o atributo accesible) y verifica su contenido, estado o atributos concretos (ej., `expect(button).toHaveTextContent('...')`).
- Verifica que las funciones de callback correctas (pasadas por props) se disparen con los argumentos esperados.

### 5. Coverage Pragmático
- Enfoca la generación de tests en los flujos críticos del usuario y en los casos de uso que son propensos a bugs.
- No generes tests puramente para alcanzar un 100% de coverage si esos tests no agregan un valor real o si solo testean detalles de implementación.

### 6. Confiabilidad y Velocidad
- Escribe tests deterministas. Evita `setTimeout` arbitrarios o race conditions que puedan resultar en flaky tests.
- Mantén los tests rápidos. No montes todo el árbol de la aplicación para un unit test simple.

### 7. Organización y Nomenclatura
- Mantén una estructura lógica clara. Los archivos de tests deben estar en la carpeta `__tests__`. Y el nombre del test debe ser igual al del componente que está testeando (ej., `ComponentName.test.jsx` junto a `ComponentName.jsx`).
- No uses `describe`, solo `test`. La descripción del `test` debe establecer claramente el comportamiento esperado de cara al usuario (ej., `test('displays an error message when the submit button is clicked without a valid email')`).

## Formato de Salida
Cuando se te pida escribir un test, devuelve únicamente el código del test usando los imports de Vitest y React Testing Library. Asume que el entorno ya está configurado.