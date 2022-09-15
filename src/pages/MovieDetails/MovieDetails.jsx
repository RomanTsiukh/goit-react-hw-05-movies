import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { TbArrowBigLeft } from 'react-icons/tb';
import { getMovieById } from 'services/api';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Box } from 'components/Box';
import { Linka, BoxInformation, Title, Href } from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function getMovie() {
      try {
        setStatus('pending');
        const movieDetails = await getMovieById(movieId);

        if (Object.keys(movieDetails).length === 0) {
          setStatus('rejected');
          return;
        }
        setMovie(movieDetails);
        setStatus('resolved');
      } catch (error) {
        console.log(error);
        setStatus('rejected');
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <Box as="div" pt="4">
      {status === 'resolved' && (
        <div>
          <Linka to={backLinkHref}>
            <TbArrowBigLeft size="16px" />
            Go back
          </Linka>
          <MovieCard movie={movie} />

          <BoxInformation>
            <Title>Additional information</Title>
            <ul>
              <li>
                <Href to="cast" state={backLinkHref}>
                  Cast
                </Href>
              </li>
              <li>
                <Href to="reviews" state={backLinkHref}>
                  Reviews
                </Href>
              </li>
            </ul>
          </BoxInformation>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
      {status === 'rejected' && (
        <div>
          <Link to="/">Go home</Link>
          <div>Sorry, there are no details for the movie.</div>
        </div>
      )}
    </Box>
  );
};

export default MovieDetails;
