import React, {useState} from 'react'
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1 className="counter-heading">Counter App</h1>

      <div className="counter-card">
        <h2 className="count-display">{count}</h2>

        <div className="button-container">
          <button className="btn increment" onClick={increment}>Increment</button>
          <button className="btn decrement" onClick={decrement}>Decrement</button>
          <button className="btn reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter