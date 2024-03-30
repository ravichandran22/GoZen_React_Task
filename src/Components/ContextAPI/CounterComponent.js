// Example usage in a component
import React from 'react';
import { useAppContext } from './Context';

const Counter = () => {
  const { state, dispatch } = useAppContext();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button type='button' style={Increment} onClick={handleIncrement}>Increment</button>
      <button type='button' style={Decrement} onClick={handleDecrement}>Decrement</button>
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
