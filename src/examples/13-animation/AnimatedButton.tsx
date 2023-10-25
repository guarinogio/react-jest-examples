// AnimatedButton.tsx
import React, { useState } from 'react';
import './styles.css';

const AnimatedButton: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Simulate a 1-second animation
  };

  return (
    <button
      onClick={handleClick}
      className={isAnimating ? 'button-animation' : ''}
    >
      Click Me
    </button>
  );
};

export default AnimatedButton;
