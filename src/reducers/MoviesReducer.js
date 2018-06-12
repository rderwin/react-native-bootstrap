import { MOVIE_SEARCH_COMPLETE, MOVIE_SEARCH_LOADING } from '../actions/types';

export const MOVIES_INITIAL_STATE = {
  movieList: null,
  loading: false,
};

export default (state = MOVIES_INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_LOADING:
      return { ...state, loading: action.payload };
    case MOVIE_SEARCH_COMPLETE:
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
};
