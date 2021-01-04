import { combineReducers, } from '@reduxjs/toolkit';
import counterReducer from '../examples/counter/counterSlice';

export default combineReducers({
  counter: counterReducer
});