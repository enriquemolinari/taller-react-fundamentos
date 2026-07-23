export default function PerfilUsuario() {
  const nombre = 'María López';
  const rol = 'Desarrolladora Frontend';
  const anioNacimiento = 1998;
  const anioActual = new Date().getFullYear();
  const esPremium = true;

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem', borderRadius: '8px' }}>
      <h2>Perfil de Usuario</h2>
      {/* Uso de llaves {} para mostrar variables */}
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Rol:</strong> {rol.toUpperCase()}</p>
      
      {/* Expresiones matemáticas directas en JSX */}
      <p><strong>Edad estimada:</strong> {anioActual - anioNacimiento} años</p>
      
      {/* Evaluaciones condicionales (operador ternario) */}
      <p><strong>Suscripción:</strong> {esPremium ? '⭐ Membresía Premium' : 'Plan Gratuito'}</p>
    </div>
  );
}
