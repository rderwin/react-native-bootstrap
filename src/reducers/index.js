import { combineReducers } from 'redux';
import MoviesReducer from './MoviesReducer';
import ChatReducer from './ChatReducer';

export * from './MoviesReducer';
export * from './ChatReducer';

export default combineReducers({
  movies: MoviesReducer,
  chat: ChatReducer,
});
