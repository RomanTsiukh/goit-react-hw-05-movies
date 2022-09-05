import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      setMovies(await fetchTrendingMovies());
    }
    getMovies();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {movies.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};
