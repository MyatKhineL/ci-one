import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className="counter">
      <h2 data-testid="count-display">Counter: {count}</h2>
      <div className="counter-buttons">
        <button onClick={increment} data-testid="increment-button">
          Increment
        </button>
        <button onClick={decrement} data-testid="decrement-button">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter; 