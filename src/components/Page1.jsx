// Page1.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../store/counterslice';

const Page1 = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Page 1</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
};

export default Page1;
