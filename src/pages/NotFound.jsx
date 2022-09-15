import { Linka } from './MovieDetails/MovieDetails.styled';
import { TbArrowBigLeft } from 'react-icons/tb';

const NotFound = () => {
  return (
    <div>
      <Linka to="/">
        <TbArrowBigLeft size="16px" />
        Go back
      </Linka>
      <h1>Sorry. No movie</h1>
    </div>
  );
};

export default NotFound;
