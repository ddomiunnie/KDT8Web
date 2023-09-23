import React, { useState, useCallback } from 'react';

export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count: {count}</p>
    </>
  );
}
