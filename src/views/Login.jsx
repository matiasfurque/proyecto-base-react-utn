import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError("Completa todos los campos")
      return
    }

    login({ email })
    navigate("/")
  }

  return (
    <div className="main-container">
    <section className="section-login">
      <h2 >Iniciar sesión</h2>

      <form onSubmit={handleSubmit}>
        <input className="input-login" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ingresa tu email" />
        <input className="input-login" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Ingresa tu contraseña" />

        <button>Ingresar</button>
        <Link className="button-reg" to="/registro">Registrarse</Link>

        {error && <p className="error-form">{error}</p>}
      </form>
    </section>
    </div>
  )
}

export { Login }