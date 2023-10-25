// AnimatedButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import AnimatedButton from './AnimatedButton';

describe('AnimatedButton', () => {
  it('should apply an animation class on button click', () => {
    render(<AnimatedButton />);
    const button = screen.getByText('Click Me');

    // The button should not have the animation class before clicking
    expect(button).not.toHaveClass('button-animation');

    // We simulate a click on the button
    fireEvent.click(button);

    // After the click, the button should have the animation class
    expect(button).toHaveClass('button-animation');
  });
});
