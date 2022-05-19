import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=82c1ce3c1871a305a32604bda0daa5b4';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day${API_KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getOneMovie = async value => {
  const response = await axios.get(`/movie/${value}${API_KEY}&language=en-US`);
  return response.data;
};

export const getCast = async value => {
  const response = await axios.get(
    `/movie/${value}/credits${API_KEY}&language=en-US`
  );
  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getReviews = async value => {
  const response = await axios.get(
    `/movie/${value}/reviews${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};

export const getMovies = async value => {
  const response = await axios.get(
    `/search/movie/&query=${value}${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};
