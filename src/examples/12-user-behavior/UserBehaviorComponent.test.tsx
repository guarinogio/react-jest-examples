import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserBehaviorComponent from './UserBehaviorComponent';

describe('UserBehaviorComponent', () => {
  it('should render with an initial count of 0', () => {
    render(<UserBehaviorComponent onButtonClick={() => {}} />);

    const countElement = screen.getByText('Count: 0');
    expect(countElement).toBeInTheDocument();
  });

  it('should increment count on button click', () => {
    let count = 0;
    const increment = () => {
      count += 1;
    };

    render(<UserBehaviorComponent onButtonClick={increment} />);

    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);

    const countElement = screen.getByText(`Count: ${count}`);
    expect(countElement).toBeInTheDocument();
  });

  it('should call the provided callback on button click', () => {
    let callbackCalled = false;
    const callback = () => {
      callbackCalled = true;
    };

    render(<UserBehaviorComponent onButtonClick={callback} />);

    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);

    expect(callbackCalled).toBe(true);
  });
});
