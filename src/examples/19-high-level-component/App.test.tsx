import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders counter component', () => {
  render(<App />);

  const countElement = screen.getByText(/Count:/i);
  const incrementButton = screen.getByText(/Increment/i);
  const decrementButton = screen.getByText(/Decrement/i);

  expect(countElement).toBeInTheDocument();
  expect(incrementButton).toBeInTheDocument();
  expect(decrementButton).toBeInTheDocument();

  const initialCount = parseInt(countElement.textContent!.split(' ')[1], 10);

  fireEvent.click(incrementButton);

  const updatedCount = parseInt(countElement.textContent!.split(' ')[1], 10);
  expect(updatedCount).toBe(initialCount + 1);

  fireEvent.click(decrementButton);

  const finalCount = parseInt(countElement.textContent!.split(' ')[1], 10);
  expect(finalCount).toBe(initialCount);
});
