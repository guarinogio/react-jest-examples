// Counter.test.tsx
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Increments the counter when the button is clicked', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText('Increment');
  fireEvent.click(incrementButton);
  const countText = getByText('Count: 1');
  expect(countText).toBeInTheDocument();
});