// StyleChangeComponent.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import StyleChangeComponent from './StyleChangeComponent';

describe('StyleChangeComponent', () => {
  it('should have the initial style', () => {
    render(<StyleChangeComponent />);
    const boxElement = screen.getByText('Click me to change the style!');
    
    // Verify that the element has the 'box' class but does not have 'active' initially
    expect(boxElement).toHaveClass('box');
    expect(boxElement).not.toHaveClass('active');
  });

  it('should change style on click', () => {
    render(<StyleChangeComponent />);
    const boxElement = screen.getByText('Click me to change the style!');
    
    // Click on the element to change the style
    fireEvent.click(boxElement);

    // Verify that the element has the 'box active' class after clicking
    expect(boxElement).toHaveClass('box active');
  });
});
