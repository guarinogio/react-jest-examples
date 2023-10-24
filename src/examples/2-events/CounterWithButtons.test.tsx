// CounterWithButtons.test.tsx
import { render, fireEvent, screen } from '@testing-library/react';
import CounterWithButtons from './CounterWithButtons';

test('Increments and decrements the counter when the buttons are clicked', () => {
  render(<CounterWithButtons />);
  const incrementButton = screen.getByText('Increment');
  const decrementButton = screen.getByText('Decrement');

  // Increment
  fireEvent.click(incrementButton);
  let countText = screen.getByText('Count: 1');
  expect(countText).toBeInTheDocument();

  // Decrement
  fireEvent.click(decrementButton);
  countText = screen.getByText('Count: 0');
  expect(countText).toBeInTheDocument();
});
