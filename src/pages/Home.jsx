import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div>{movie.title}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
