import React, { useState } from 'react';
import './Login.css';



export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('username: ', username);
    console.log('password: ', password);

    // Acá tendríamos que ver como lo checkeamos con la base de datos.

    // -----
    setUsername('');
    setPassword('');
  };

  return (
    
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
        className="btn btn-primary"
        type="submit"
        onClick={handleSubmit}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
