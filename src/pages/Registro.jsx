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
    <section className="section-registro">
      <h2>Crear cuenta</h2>

      <form onSubmit={handleSubmit}>
        <input className="input-registro" onChange={(e) => setNombre(e.target.value)} placeholder="Ingresa tu nombre" />
        <input className="input-registro"onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email" />
        <input className="input-registro" onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña" />

        <button className="btn-registro">Registrarse</button>
      </form>
    </section>
  )
}

export { Registro }