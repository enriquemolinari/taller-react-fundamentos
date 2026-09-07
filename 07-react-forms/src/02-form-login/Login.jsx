import { useState } from 'react';
import { useForm } from 'react-hook-form';


const estilos = {
    form: { display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' },
    campo: { display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' },
    input: { padding: '8px', fontSize: '1rem', borderRadius: '4px', border: '1px solid #ccc' },
    error: { color: 'red', fontSize: '0.85rem' },
    boton: { padding: '10px', fontSize: '1rem', cursor: 'pointer', borderRadius: '4px', background: '#aa3bff', color: '#fff', border: 'none' },
};

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const host = "http://localhost:8080";

    async function onSubmit(datos) {
        setErrorMessage(null);
        setSuccessMessage(null);
        const response = await fetch(
            `${host}/login`,
            {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: datos.usuario,
                    password: datos.clave
                }),
            }
        );
        if (response.ok) {
            setSuccessMessage("Login successful!");
        } else {
            const errorData = await response.json();
            setErrorMessage(errorData.message);
        }

    }

    return (
        <div>
            <h2>Ingrese al Sistema...</h2>
            {successMessage && <span style={{ color: 'green', fontSize: '0.85rem' }}>{successMessage}</span>}
            <form onSubmit={handleSubmit(onSubmit)} style={estilos.form}>

                <div style={estilos.campo}>
                    <label>Usuario</label>
                    <input
                        {...register('usuario', { required: 'El usuario es obligatorio' })}
                        placeholder="Tu usuario"
                        style={estilos.input}
                    />
                    {errors.usuario && <span style={estilos.error}>{errors.usuario.message}</span>}
                    {errorMessage && <span style={estilos.error}>{errorMessage}</span>}
                </div>

                <div style={estilos.campo}>
                    <label>Clave</label>
                    <input
                        {...register('clave', { required: 'La clave es obligatoria' })}
                        placeholder="Tu clave"
                        style={estilos.input}
                    />
                    {errors.clave && <span style={estilos.error}>{errors.clave.message}</span>}
                </div>

                <button type="submit" style={estilos.boton}>Enviar</button>
            </form>
        </div>
    );
}
