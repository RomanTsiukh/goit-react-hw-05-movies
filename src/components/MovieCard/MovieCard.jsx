import { BoxCard, Img, NameMovie, Title, Text } from './MovieCard.styled';
import { Box } from 'components/Box';
// import { IMG_PATH } from 'constants/constants';

export const MovieCard = ({ movie }) => {
  const { poster_path, title, vote_average, overview, genres, release_date } =
    movie;

  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  const DEFAULT_IMG =
    'https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj';

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
