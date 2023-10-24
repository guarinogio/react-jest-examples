import React from 'react';

interface ConditionalRenderProps {
  show: boolean;
}

const ConditionalRender: React.FC<ConditionalRenderProps> = ({ show }) => {
  return (
    <div>
      {show && <h1>This content is shown when 'show' is true.</h1>}
      {!show && <h1>This content is shown when 'show' is false.</h1>}
    </div>
  );
};

export default ConditionalRender;
