# 02. Crear un proyecto en React with Vite

Creamos un proyecto en React con Vite, para ello ejecutamos el siguiente comando:

```bash
npm create vite@latest <nombre-del-proyecto> -- --template react
```

Agregamos las dependencias necesarias para realizar pruebas unitarias con Vitest y React Testing Library:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/dom
```

Usamos [Mock service worker (MSW)](https://mswjs.io/) para interceptar el consumo de servicios HTTP que hacen los componentes que testeamos.

```bash
npm install msw --save-dev
```