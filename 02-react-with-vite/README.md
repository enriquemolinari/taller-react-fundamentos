# 02. Crear tu primera app en React con Vite

Necesitas descargar e instalar [Node.js](https://nodejs.org/en/download). Para verificar si ya los tenés, ejecuta en la terminal:

```bash
node -v
npm -v
```

## Que es Vite

Vite es una herramienta de desarrollo frontend para crear aplicaciones modernas de forma rápida.

En desarrollo, levanta un servidor muy veloz y actualiza cambios al instante (HMR: Hot Module Replacement). En producción, genera un build optimizado con lo cual cumple el rol de bundler.

En un proyecto React con Client Side Rendering (CSR), Vite es importante porque transforma JSX a JavaScript, resuelve imports, procesa estilos y assets, y empaqueta todo para que el navegador reciba archivos optimizados.

Sin una herramienta como Vite, tendrías que configurar manualmente transformación, empaquetado y optimización, lo que agrega complejidad innecesaria para quien está empezando.

## Crear el proyecto

Ejecuta estos comandos en la terminal:

```bash
npm create vite@latest nombre-del-proyecto -- --template react
cd nombre-del-proyecto
npm install
npm run dev
```

Cuando corra el servidor con `npm run dev`, Vite te va a mostrar una URL local (por ejemplo: http://localhost:5173) para abrir la app en el navegador.

## Estructura de archivos por defecto

Cuando se crea la app, vas a ver una estructura similar a esta:

```text
nombre-del-proyecto/             # carpeta raiz del proyecto
  node_modules/                  # dependencias instaladas por npm
  index.html                     # HTML base donde React monta la app
  package.json                   # scripts (dev/build/preview) y dependencias
  package-lock.json              # versiones exactas de las dependencias instaladas
  vite.config.js                 # configuracion de Vite
  eslint.config.js               # reglas de calidad y estilo de codigo
  public/                        # archivos estaticos servidos tal cual
  src/                           # codigo fuente principal de la aplicacion
    main.jsx                     # punto de entrada de React
    App.jsx                      # componente principal inicial
    index.css                    # estilos globales
    App.css                      # estilos del componente App
    assets/                      # imagenes y recursos usados desde src
```

## Primer cambio recomendado

1. Abri `src/App.jsx`.
2. Cambia el contenido del componente.
3. Guarda el archivo y mira el navegador.

Vite actualiza los cambios en caliente (Hot Module Replacement), asi que no hace falta recargar manualmente.

## Scripts más usados

```bash
npm run dev      # inicia entorno de desarrollo
npm run build    # genera version de produccion
npm run preview  # previsualiza build de produccion
```



