/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false’';
const initialState = {
  cryptos: [],
  status: null,
};

export const fetchCryptos = createAsyncThunk(
  'crypto/fetchCryptos',
  async () => {
    const response = await fetch(`${API}`);
    const data = await response.json();
    return data;
  },
);

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCryptos.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchCryptos.fulfilled, (state, action) => {
        state.status = 'success';
        state.cryptos = action.payload;
      })
      .addCase(fetchCryptos.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export default cryptoSlice.reducer;
