// LoginForm.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import LoginForm from './LoginForm';

test('Submits the login form with correct data', () => {
  render(<LoginForm />);
  const usernameInput = screen.getByTestId('username-input');
  const passwordInput = screen.getByTestId('password-input');
  const loginButton = screen.getByTestId('login-button');

  // Simulate data input
  fireEvent.change(usernameInput, { target: { value: 'user123' } });
  fireEvent.change(passwordInput, { target: { value: 'pass456' } });

  // Simulate clicking the login button
  fireEvent.click(loginButton);

  // Expect a success message
  const successMessage = screen.getByTestId('success-message');
  expect(successMessage).toBeInTheDocument();
});

test('Does not submit the login form with incorrect data', () => {
  render(<LoginForm />);
  const usernameInput = screen.getByTestId('username-input');
  const passwordInput = screen.getByTestId('password-input');
  const loginButton = screen.getByTestId('login-button');

  // Simulate data input with incorrect values
  fireEvent.change(usernameInput, { target: { value: 'wronguser' } });
  fireEvent.change(passwordInput, { target: { value: 'wrongpass' } });

  // Simulate clicking the login button
  fireEvent.click(loginButton);

  // Expect no success message
  const successMessage = screen.queryByTestId('success-message');
  expect(successMessage).toBeNull();
});
