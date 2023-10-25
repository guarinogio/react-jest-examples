// ErrorComponent.tsx
import React from 'react';

interface ErrorComponentProps {
  error: string;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
  return (
    <div>
      <p className="error-message">{error}</p>
    </div>
  );
};

export default ErrorComponent;
