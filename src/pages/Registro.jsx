import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Registro = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const user = { nombre, email }
    login(user)
    navigate("/")
  }

  return (
    /* 1. Agregamos el div que tiene el fondo animado */
    <div className="main-container">
      <section className="section-registro">
        <h2>Crear cuenta</h2>

        <form onSubmit={handleSubmit}>
          {/* Usamos input-login si quieres que hereden el mismo estilo visual */}
          <input className="input-login" onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa tu nombre" />
          <input className="input-login" onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email" type="email" />
          <input className="input-login" onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña" type="password" />

          <button className="btn-registro">Registrarse</button>
        </form>
      </section>
    </div>
  )
}

export { Registro }