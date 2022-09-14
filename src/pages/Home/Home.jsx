import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { Title, List, Item, Link } from './Home.styled';
import { Box } from 'components/Box';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      setMovies(await fetchTrendingMovies());
    }
    getMovies();
  }, []);

  return (
    <Box px="5">
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div>{movie.title}</div>
              </Link>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};
