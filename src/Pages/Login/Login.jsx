import React, { useState } from 'react';
import axios from 'axios';

import './login.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:8080/auth/login', {
          nomeCompleto: username,
          senha: password,
        });
  
        setMessage(response.data);
      } catch (error) {
        setMessage('Erro durante o login: Credenciais inválidas');
      }
    };
  
    return (
      <div>
        <h1>Login</h1>
        <div>
          <label>Nome Completo:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin}>Login</button>
        <p>{message}</p>
      </div>
    );
  }
  export default Login;
  