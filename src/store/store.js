// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterslice';

export const store = configureStore({
  reducer: {
    counter: counterReducer // Register the counter slice in the store
  }
});
