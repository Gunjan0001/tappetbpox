// Page2.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement } from '../store/counterslice';

const Page2 = () => {
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch();

  return (
    <div className='m-5'>
      <h1>Page 2</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Page2;
