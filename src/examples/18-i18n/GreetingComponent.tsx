// GreetingComponent.tsx
import React from 'react';
import { FormattedMessage } from 'react-intl';

const GreetingComponent: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <FormattedMessage id="greeting" defaultMessage="Hello, {name}!" values={{ name }} />
    </div>
  );
};

export default GreetingComponent;
