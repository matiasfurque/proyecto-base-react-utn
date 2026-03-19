import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChatContext } from '../context/ChatContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { login } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Completa todos los campos');
      return;
    }

    const response = login({ email, password });

    if (!response) {
      setError('Email o contraseña incorrectos');
      return;
    }

    navigate('/');
  };

  return (
    <div className="main-container">
      <section className="section-login">
        <h2>Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="input-login"
            type="email"
            placeholder="Ingresa tu email"
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="input-login"
            type="password"
            placeholder="Ingresa tu contraseña"
            onChange={(event) => setPassword(event.target.value)}
          />

          <button>Ingresar</button>

          <Link className="button-reg" to="/registro">
            Registrarse
          </Link>
          <p className='Acerca'>
            ¿Querés saber más? <Link to="/acerca">Acerca del proyecto</Link>
          </p>

          {error && <p className="error-form">{error}</p>}
        </form>
      </section>
    </div>
  );
};

export { Login };
