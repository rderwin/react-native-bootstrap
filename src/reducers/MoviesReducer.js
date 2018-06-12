import {
  MOVIE_DETAIL_FETCH_COMPLETE,
  MOVIE_DETAIL_LOADING,
  MOVIE_SEARCH_COMPLETE,
  MOVIE_SEARCH_LOADING,
} from '../actions/types';

export const MOVIES_INITIAL_STATE = {
  movieList: null,
  loading: false,
  movieDetail: null,
  movieDetailLoading: false,
};

export default (state = MOVIES_INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_DETAIL_LOADING:
      return { ...state, movieDetailLoading: action.payload };
    case MOVIE_DETAIL_FETCH_COMPLETE:
      return { ...state, movieDetail: action.payload };
    case MOVIE_SEARCH_LOADING:
      return { ...state, loading: action.payload };
    case MOVIE_SEARCH_COMPLETE:
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
};
