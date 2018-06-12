import { api } from '../api/Api';
import { MOVIE_SEARCH_COMPLETE } from './types';

export const searchMovies = (queryText) => async (dispatch) => {
  try {
    const response = await api.searchMovies(queryText);
    dispatch({
      type: MOVIE_SEARCH_COMPLETE,
      payload: response.data,
    });
  } catch (response) {
    console.log('error:', response);
  }
};
