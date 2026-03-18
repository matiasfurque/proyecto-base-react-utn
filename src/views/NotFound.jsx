import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="cont-not-found">
      <h1>404</h1>
      <Link to="/">Volver</Link>
    </section>
  )
}

export { NotFound }