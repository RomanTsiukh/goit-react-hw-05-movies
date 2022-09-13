import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import { IMG_PATH } from 'constants/constants';
import { Item, Image } from './Cast.styled';
import { Box } from 'components/Box';

const IF_NO_PHOTO = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCastInfo() {
      const castInfo = await fetchCast(movieId);
      setCast(castInfo);
    }
    getCastInfo();
  }, [movieId]);

  return (
    <Box p="5">
      <ul>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <Item key={id}>
              <Image
                src={profile_path ? IMG_PATH + profile_path : IF_NO_PHOTO}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </Item>
          );
        })}
      </ul>
    </Box>
  );
};

export default Cast;
