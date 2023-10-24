import { useState, useEffect } from 'react';

function AsyncComponent() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Simulate an asynchronous data fetch
    setTimeout(() => {
      setData('Async Data Loaded');
    }, 1000);
  }, []);

  return <div>{data}</div>;
}

export default AsyncComponent;
