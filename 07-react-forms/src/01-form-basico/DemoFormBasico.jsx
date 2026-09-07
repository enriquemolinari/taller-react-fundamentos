import { useForm } from 'react-hook-form';


const estilos = {
  form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' },
  campo: { display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' },
  input: { padding: '8px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' },
  error: { color: 'red', fontSize: '0.85rem' },
  boton: { padding: '10px', fontSize: '1rem', cursor: 'pointer', borderRadius: '4px', background: '#aa3bff', color: '#fff', border: 'none' },
};

export default function DemoFormBasico() {
  // useForm devuelve las herramientas para manejar el formulario
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Esta función se ejecuta cuando el form es válido y se hace submit
  function onSubmit(datos) {
    console.log('Datos del formulario:', datos);
  }

  return (
    <div>
      <h2>Formulario con react-hook-form</h2>

      {/*
        handleSubmit valida los campos antes de llamar a onSubmit.
        Si hay errores, no llama a onSubmit.
      */}
      <form onSubmit={handleSubmit(onSubmit)} style={estilos.form}>

        <div style={estilos.campo}>
          <label>Nombre</label>
          {/*
            register("nombre", { ... }) conecta el input con react-hook-form
            y define las reglas de validación.
          */}
          <input
            {...register('nombre', { required: 'El nombre es obligatorio' })}
            placeholder="Tu nombre"
            style={estilos.input}
          />
          {/* errors.nombre existe si la validación falló */}
          {errors.nombre && <span style={estilos.error}>{errors.nombre.message}</span>}
        </div>

        <div style={estilos.campo}>
          <label>Email</label>
          <input
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: { value: /^\S+@\S+$/, message: 'Email inválido' },
            })}
            placeholder="tu@email.com"
            style={estilos.input}
          />
          {errors.email && <span style={estilos.error}>{errors.email.message}</span>}
        </div>

        <button type="submit" style={estilos.boton}>Enviar</button>
      </form>
    </div>
  );
}
