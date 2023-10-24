import React, { useState } from 'react';

interface AuthState {
  isAuthenticated: boolean;
}

const Login: React.FC = () => {
  const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false });

  const handleLogin = () => {
    setAuth({ isAuthenticated: true });
  };

  const handleLogout = () => {
    setAuth({ isAuthenticated: false });
  };

  return (
    <div>
      {auth.isAuthenticated ? (
        <div>
          <h2>Welcome, User!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Login;
