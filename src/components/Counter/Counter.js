import React, { useState, useEffect } from 'react';

// Pass no op here to spy to make it a function – the page doesn't recognise if not as it works in unit tests, not intergration on page tests
function Counter({ startValue = 0, spy = () => {} }) {
  const [count, setCount] = useState(startValue);
  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <div>
      <h1>another counter</h1>
      <button data-testid="increment-btn" onClick={() => setCount(count + 1)}>
        +
      </button>
      <p data-testid="counter-display">{count}</p>
      <button data-testid="decrement-btn" onClick={() => setCount(count - 1)}>
        -
      </button>
      <button data-testid="spy-button" onClick={() => spy(count)}>
        spy!
      </button>
    </div>
  );
}

export default Counter;
