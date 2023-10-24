import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Renders Home page', () => {
  render(<App />);
  const homeElement = screen.getByText('Welcome to the Home Page');
  expect(homeElement).toBeInTheDocument();
});

test('Renders Home page', () => {
    render(<App />);
    const homeLink = screen.getByText('Home');
  
    // Simulate clicking on the "Home" link to trigger navigation
    fireEvent.click(homeLink);
  
    // Verify that the Home component has been rendered successfully
    const homeElement = screen.getByText('Welcome to the Home Page');
    expect(homeElement).toBeInTheDocument();
  });

test('Renders About page', () => {
  render(<App />);
  const aboutLink = screen.getByText('About');

  // Simulate clicking on the "About" link to trigger navigation
  fireEvent.click(aboutLink);

  // Verify that the About component has been rendered successfully
  const aboutElement = screen.getByText('About Us');
  expect(aboutElement).toBeInTheDocument();
});
