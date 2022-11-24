/* eslint-disable */
import { createStore,combineReducers, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import cryptosReducer from './cryptoSlice';
import detailsReducer from './detailSlice';

const reducer = combineReducers({
 cryptos: cryptosReducer,
 })

 const store = configureStore({
  reducer: {
    cryptos: cryptosReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultNormalizer) =>  getDefaultNormalizer().concat(logger)
 });

export default store;