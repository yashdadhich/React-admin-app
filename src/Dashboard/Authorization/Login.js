import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../../index.css'; // Import CSS file for login page styling

function Login({ setIsLoggedIn }) {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // For simplicity, checking if username and password are not empty
    if (username.trim() !== '' && password.trim() !== '') {
      setIsLoggedIn(true); // Update authentication state
      setLoginSuccess(true); // Update login success state
    } else {
      alert('Please enter username and password');
    }
  };

  // If login is successful, redirect to dashboard
  if (loginSuccess) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default Login;
