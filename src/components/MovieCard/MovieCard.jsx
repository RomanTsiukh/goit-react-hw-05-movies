import { BoxCard, Img, NameMovie, Title, Text } from './MovieCard.styled';
import { Box } from 'components/Box';
import { IMG_PATH, DEFAULT_IMG } from 'constants/constants';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  return (
    <BoxCard>
      <Img
        src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
        alt={title}
      />

      <Box pl="4">
        <Box pb="4">
          <NameMovie>
            {title} ({release_date.slice(0, 4)})
          </NameMovie>
          <div>User Score: {Math.round(vote_average)}%</div>
        </Box>

        <Box pb="4">
          <Title>Overview</Title>
          <Text>{overview}</Text>
        </Box>

        <Box pb="4">
          <Title>Genres</Title>
          <Text>{genres.map(genre => genre.name).join(', ')}</Text>
        </Box>
      </Box>
    </BoxCard>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};
