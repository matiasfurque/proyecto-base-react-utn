import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { ChatContext } from "../context/ChatContext"

const Registro = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { register } = useContext(ChatContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    setError("")

    // Validaciones basicas para el registro del usuario 
    if (!nombre || !email || !password) {
      setError("Todos los campos son obligatorios")
      return
    }

    if (nombre.trim().length < 3) {
      setError("El nombre debe tener al menos 3 caracteres")
      return
    }

    if (!email.includes("@")) {
      setError("El email no es válido")
      return
    }

    if (password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres")
      return
    }

    const response = register({
      firstName: nombre.trim(),
      email,
      password
    })

    if (!response) {
      setError("El usuario ya existe")
      return
    }

    navigate("/")
  }

  return (
    <div className="main-container">
      <section className="section-registro">
        <h2>Crear cuenta</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input-login"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />

          <input
            className="input-login"
            type="email"
            placeholder="Ingresa tu email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="input-login"
            type="password"
            placeholder="Ingresa tu contraseña"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button className="btn-registro">Registrarse</button>

          {error && <p className="error-form">{error}</p>}
        </form>
      </section>
    </div>
  )
}

export { Registro }