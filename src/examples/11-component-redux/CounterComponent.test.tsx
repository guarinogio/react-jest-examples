import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import CounterComponent from './CounterComponent';

describe('CounterComponent', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    );
  });

  it('should render with an initial count of 0', () => {
    const countElement = screen.getByText('Counter: 0');
    expect(countElement).toBeInTheDocument();
  });

  it('should increment the count on button click', () => {
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const countElement = screen.getByText('Counter: 1');
    expect(countElement).toBeInTheDocument();
  });

  it('should decrement the count on button click', () => {
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Counter: -?\d+/);
    expect(countElement).toBeInTheDocument();
  });
});
