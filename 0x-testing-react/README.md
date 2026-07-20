# Testing with Vitest and React Testing Library

Instalamos Vitest y jsdom primero:

```bash
npm install -D vitest jsdom
```

Agrega en `vite.config.js` la siguiente configuración:
```javascript
  test: {
    // para poder usar el DOM en las pruebas unitarias
    environment: 'jsdom'
  },
```

y luego React Testing Library para poder realizar pruebas unitarias en nuestro proyecto de React con Vite.

```bash
npm install --save-dev @testing-library/react @testing-library/dom @testing-library/user-event
```

Luego instalamos MSW (Mock Service Worker) para poder interceptar peticiones HTTP.

```bash
npm i msw --save-dev
```

