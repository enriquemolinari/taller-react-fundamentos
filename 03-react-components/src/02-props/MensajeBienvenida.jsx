// sin usar desestructuración
// export default function MensajeBienvenida(props) {
//   return (
//     <div style={{ backgroundColor: '#e3f2fd', color: '#0d47a1', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
//       <h3>¡Hola, {props.nombre}!</h3>
//       <p>Tu rol asignado en la plataforma es: <strong>{props.rol}</strong></p>
//     </div>
//   );
// }


// usando desestructuración
export default function MensajeBienvenida({ nombre, rol = 'Estudiante' }) {
  return (
    <div style={{ backgroundColor: '#e3f2fd', color: '#0d47a1', padding: '1rem', marginBottom: '1rem', borderRadius: '8px' }}>
      <h3>¡Hola, {nombre}!</h3>
      <p>Tu rol asignado en la plataforma es: <strong>{rol}</strong></p>
    </div>
  );
}
