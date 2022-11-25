/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  details: [],
};

const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    viewDetails(state, action) {
      const newState = state.details.filter((coin) => coin.id === action.payload.id);
      state.details = newState;
      state.details.push(action.payload);
    },
  },
});

export const { viewDetails } = detailSlice.actions;

export default detailSlice.reducer;
