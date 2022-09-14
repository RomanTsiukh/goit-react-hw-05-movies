import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import MovieCard from 'components/MovieCard';
import { MovieList, MovieItem, Card } from './MoviesGallery.styled';

const MoviesGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <Box>
      <MovieList>
        {movies.map(movie => {
          return (
            <MovieItem key={movie.id}>
              <Card to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieCard movie={movie} />
              </Card>
            </MovieItem>
          );
        })}
      </MovieList>
    </Box>
  );
};

MoviesGallery.protoTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesGallery;
