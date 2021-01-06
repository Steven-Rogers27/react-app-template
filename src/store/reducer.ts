import { combineReducers, } from '@reduxjs/toolkit';
import counterReducer from '../examples/counter/counterSlice';
import postsReducer from '../examples/posts/postsSlice';

export default combineReducers({
  counter: counterReducer,
  posts: postsReducer,
});