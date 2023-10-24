// LoginForm.tsx
import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  const handleLogin = () => {
    // Perform login logic here (simplified for the example)
    if (username === 'user123' && password === 'pass456') {
      setLoginSuccess(true);
    }
  }

  return (
    <div>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} data-testid="username-input" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} data-testid="password-input" />
      <button onClick={handleLogin} data-testid="login-button">Login</button>
      {loginSuccess && <p data-testid="success-message">Login successful</p>}
    </div>
  );
}

export default LoginForm;
