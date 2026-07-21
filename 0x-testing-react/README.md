# Testing with Vitest and React Testing Library

Instalamos Vitest y jsdom primero:

```bash
npm install -D vitest jsdom
```

Agrega en `vite.config.js` la siguiente configuración:
```javascript
  test: {
    // para poder usar el DOM en las pruebas unitarias
    environment: 'jsdom',
    globals: true
  },
```

y luego React Testing Library para poder realizar pruebas unitarias en nuestro proyecto de React con Vite.

```bash
npm install --save-dev @testing-library/react @testing-library/dom @testing-library/user-event @testing-library/jest-dom
```

- **@testing-library/react**: Proporciona utilidades para renderizar componentes React en tests. Permite montar componentes y acceder a elementos del DOM de forma similar a cómo un usuario interactuaría con la aplicación.
  - Ejemplos: `render()`, `screen`, `within()`, `cleanup()`

- **@testing-library/dom**: Librería base que contiene queries y utilidades para seleccionar elementos del DOM. Es la base sobre la que se construye `@testing-library/react`.
  - Ejemplos: `getByRole()`, `getByText()`, `getByTestId()`, `queryByLabelText()`, `findByPlaceholderText()`, `getAllByClass()`

- **@testing-library/user-event**: Simula eventos de usuario como clicks, escritura de texto, cambios de foco, etc. de forma más realista que los eventos de DOM tradicionales. Es el reemplazo moderno de `fireEvent`.
  - Ejemplos: `user.click()`, `user.type()`, `user.selectOptions()`, `user.upload()`, `user.hover()`, `user.clear()`

- **@testing-library/jest-dom**: Extiende Jest con custom matchers específicos para el DOM para hacer los tests más legibles y expresivos.
  - Ejemplos: `.toBeInTheDocument()`, `.toHaveClass()`, `.toHaveAttribute()`, `.toBeVisible()`, `.toBeDisabled()`, `.toHaveTextContent()`, `.toHaveValue()`

Luego instalamos MSW (Mock Service Worker) para poder interceptar peticiones HTTP.

```bash
npm i msw --save-dev
```

Para ejecutar los tests, ejecutamos el siguiente comando:

```bash
npm run test
```