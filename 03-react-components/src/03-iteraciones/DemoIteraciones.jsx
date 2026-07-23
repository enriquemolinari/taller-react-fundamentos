const DemoIteraciones = () => {
  const cursos = [
    { id: 1, nombre: 'React Fundamentos', nivel: 'Inicial' },
    { id: 2, nombre: 'JavaScript Avanzado', nivel: 'Intermedio' },
    { id: 3, nombre: 'CSS Flexbox y Grid', nivel: 'Inicial' },
    { id: 4, nombre: 'Node.js y Express', nivel: 'Avanzado' }
  ];

  return (
    <section>
      <h2>Lista de Cursos (Iteración con .map)</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.id}>
            <strong>{curso.nombre}</strong> - Nivel: {curso.nivel}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default DemoIteraciones;
