// EnvironmentComponent.test.tsx
import { render, screen } from '@testing-library/react';
import EnvironmentComponent from './EnvironmentComponent';

describe('EnvironmentComponent', () => {
  it('should display the correct URL in a custom environment', () => {
    // Mock the window location to simulate a different environment
    Object.defineProperty(window, 'location', {
      value: { href: 'https://example.com' },
      writable: true,
    });

    render(<EnvironmentComponent />);
    const urlElement = screen.getByText('https://example.com');
    
    expect(urlElement).toBeInTheDocument();
  });
});
