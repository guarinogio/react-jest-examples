// StyleChangeComponent.tsx
import  { useState } from 'react';

function StyleChangeComponent() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`box ${isActive ? 'active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      Click me to change the style!
    </div>
  );
}

export default StyleChangeComponent;
