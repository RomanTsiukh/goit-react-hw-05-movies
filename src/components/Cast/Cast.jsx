import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/api';
import { IMG_PATH } from 'constants/constants';

const NO_IMAGE = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams;

  useEffect(() => {
    (async function getCastInfo() {
      const castInfo = await getCast(movieId);
      setCast(castInfo);
    })();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <img
                src={profile_path ? IMG_PATH + profile_path : NO_IMAGE}
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
