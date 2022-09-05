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
