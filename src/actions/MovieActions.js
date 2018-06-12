import { api } from '../api/Api';
import {
  MOVIE_DETAIL_FETCH_COMPLETE,
  MOVIE_DETAIL_LOADING,
  MOVIE_SEARCH_COMPLETE,
  MOVIE_SEARCH_LOADING,
} from './types';

export const getMovieDetail = (imdbID) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_DETAIL_LOADING,
      payload: true,
    });
    const response = await api.fetchMovieDetail(imdbID);
    dispatch({
      type: MOVIE_DETAIL_FETCH_COMPLETE,
      payload: response.data,
    });
  } catch (response) {
    console.log('error:', response);
  } finally {
    dispatch({
      type: MOVIE_DETAIL_LOADING,
      payload: false,
    });
  }
};

export const searchMovies = (queryText) => async (dispatch) => {
  try {
    dispatch({
      type: MOVIE_SEARCH_LOADING,
      payload: true,
    });
    const response = await api.searchMovies(queryText);
    dispatch({
      type: MOVIE_SEARCH_COMPLETE,
      payload: response.data,
    });
  } catch (response) {
    console.log('error:', response);
  } finally {
    dispatch({
      type: MOVIE_SEARCH_LOADING,
      payload: false,
    });
  }
};
