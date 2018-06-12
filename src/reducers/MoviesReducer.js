import { MOVIE_SEARCH_COMPLETE } from '../actions/types';

export const MOVIES_INITIAL_STATE = {
  movieList: null,
};

export default (state = MOVIES_INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_COMPLETE:
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
};
