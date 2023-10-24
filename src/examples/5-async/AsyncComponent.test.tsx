import { render, screen, waitFor } from '@testing-library/react';
import AsyncComponent from './AsyncComponent';

test('Renders async data after fetch', async () => {
  render(<AsyncComponent />);

  const initialData = screen.queryByText('Async Data Loaded');
  expect(initialData).toBeNull();

  await waitFor(() => {
    const asyncData = screen.getByText('Async Data Loaded');
    expect(asyncData).toBeInTheDocument();
  });
});
