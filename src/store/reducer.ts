import { combineReducers, } from '@reduxjs/toolkit';
import postsReducer from '../examples/posts/postsSlice';

export default combineReducers({
  posts: postsReducer,
});