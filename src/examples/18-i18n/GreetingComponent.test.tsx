// GreetingComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import GreetingComponent from './GreetingComponent';
import { IntlProvider } from 'react-intl'; // Import IntlProvider
import { intl } from './i18n';

describe('GreetingComponent', () => {
  it('should display a greeting message in English', () => {
    render(
      // Wrap your component with IntlProvider
      <IntlProvider locale="en" messages={require('./en.json')}>
        <GreetingComponent name="John" />
      </IntlProvider>
    );
    const greetingMessage = intl.formatMessage({ id: 'greeting' }, { name: 'John' });
    const greetingElement = screen.getByText(greetingMessage);
    expect(greetingElement).toBeInTheDocument();
  });
});
