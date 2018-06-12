import axios from 'axios';

let instance = null;

export default class Api {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.axiosInstance = axios.create({
      baseURL: 'https://www.omdbapi.com',
    });

    return instance;
  }

  searchMovies(searchParam) {
    return this.axiosInstance.get('/', {
      params: {
        s: searchParam,
        apikey: '83bf75ff',
      },
    });
  }

  fetchMovieDetail(imdbID) {
    return this.axiosInstance.get('/', {
      params: {
        i: imdbID,
        apikey: '83bf75ff',
      },
    });
  }
}

export const api = new Api();
