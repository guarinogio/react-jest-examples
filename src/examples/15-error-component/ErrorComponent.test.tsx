// ErrorComponent.test.tsx
import { render, screen } from '@testing-library/react';
import ErrorComponent from './ErrorComponent';

describe('ErrorComponent', () => {
  it('should display the error message', () => {
    const errorMessage = 'An error occurred!';
    render(<ErrorComponent error={errorMessage} />);

    // Check if the error message is displayed in the component
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toBeInTheDocument();
  });

  it('should apply a CSS class to the error message', () => {
    const errorMessage = 'An error occurred!';
    render(<ErrorComponent error={errorMessage} />);

    // Check if a CSS class is applied to the error message
    const errorElement = screen.getByText(errorMessage);
    expect(errorElement).toHaveClass('error-message');
  });
});
