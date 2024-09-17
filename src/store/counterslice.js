// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0 // Initial counter value set to 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1; // Increase counter by 1
    },
    decrement: (state) => {
      state.value -= 1; // Decrease counter by 1
    }
  }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
