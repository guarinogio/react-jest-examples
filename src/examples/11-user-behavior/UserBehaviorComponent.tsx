import React, { useState } from 'react';

interface UserBehaviorProps {
  onButtonClick: () => void;
}

// UserBehaviorComponent to demonstrate user interactions.
const UserBehaviorComponent: React.FC<UserBehaviorProps> = ({ onButtonClick }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    onButtonClick(); // Call the provided callback on button click.
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UserBehaviorComponent;
