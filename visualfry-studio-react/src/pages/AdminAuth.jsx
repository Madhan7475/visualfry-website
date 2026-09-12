import React, { useState } from 'react';

const AdminAuth = ({ children }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') { // Simple password for now
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div className="admin-auth-wrapper">
      <div className="auth-card">
        <h2>Admin Access</h2>
        <p>Please enter your password to continue</p>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <p className="error-msg">{error}</p>}
      </div>
    </div>
  );
};

export default AdminAuth;
