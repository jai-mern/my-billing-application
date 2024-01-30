import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic here
    console.log('Logging in with:', { username, password });
  };

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <p>
          Don't have an account? <Link to="/register">Register here</Link>.
        </p>
        <p>
          Forgot your password? <Link to="/forgot-password">Reset it here</Link>.
        </p>
      </form>
    </div>
  );
};

export default Login;
