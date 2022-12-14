import axios from 'axios';

const API_KEY = '6d25a4756e0ff1ccca3eba13a74efa5c';
const MEDIA_TYPE = 'movie';
const TIME_WINDOW = 'day';
const TRENDING = 'trending';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${TRENDING}/${MEDIA_TYPE}/${TIME_WINDOW}?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async movieId => {
  try {
    const ID = Number(movieId);
    const response = await axios.get(`${MEDIA_TYPE}/${ID}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCast = async movieId => {
  try {
    const response = await axios.get(
      `${MEDIA_TYPE}/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviews = async movieId => {
  try {
    const response = await axios.get(
      `${MEDIA_TYPE}/${movieId}/reviews?api_key=${API_KEY}`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

// export const fetchKeywordMovie = async () => {
//   try {
//     const response = await axios.get(
//       `search/${MEDIA_TYPE}?api_key=${API_KEY}&query=query&language=en-US&page=1&include_adult=false`
//     );
//     return response.data.results;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getMovieBySearch = async query => {
  try {
    const response = await axios.get(`search/movie`, {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
