import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button type='button' style={Increment} onClick={() => setCount(count + 1)}>Increment</button>
      <button type='button' style={Decrement} onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

const Increment = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "5px",
    border: "none",
    cursor: 'pointer'
};
const Decrement = {
    padding: "10px 20px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "5px",
    border: "none",
    marginLeft: "10px",
    cursor: 'pointer'
};
