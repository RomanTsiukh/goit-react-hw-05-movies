import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/api';

import { MovieCard } from 'components/MovieCard';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const STATUS = {
    idle: 'IDLE',
    pending: 'PENDING',
    resolved: 'RESOLVED',
    rejected: 'REJECTED',
  };

  const { idle, pending, resolved, rejected } = STATUS;

  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(idle);

  useEffect(() => {
    (async function getMovie() {
      try {
        setStatus(pending);
        const movieDetails = await getMovieById(movieId);
        const MOVIE_DETAILS_AVAILABLE = Object.keys(movieDetails).length !== 0;
        if (!MOVIE_DETAILS_AVAILABLE) {
          setStatus(rejected);
          return;
        }
        setMovie(movieDetails);
        setStatus(resolved);
      } catch (error) {
        console.log(error);
        setStatus(rejected);
      }
    })();
  }, [movieId, pending, rejected, resolved]);

  return (
    <>
      {status === 'RESOLVED' && (
        <div>
          <div as="div" p="5">
            <Link to={backLinkHref}>Back to movies</Link>
            <MovieCard movie={movie} />
            <div>
              <div
                as="h2"
                textAlign={'center'}
                fontSize="l"
                color="orangered"
                mb="4"
              >
                Additional information
              </div>
              <div as="ul" display="flex" mb="4">
                <li>
                  <Link to="cast" state={backLinkHref}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link to="reviews" state={backLinkHref}>
                    Reviews
                  </Link>
                </li>
              </div>

              <Outlet />
            </div>
          </div>
        </div>
      )}
      {status === 'REJECTED' && (
        <div as="div" p="4" display="flex">
          <Link to="/">Go home</Link>
          <div
            as="b"
            textAlign="center"
            mx="auto"
            mt="5"
            fontSize="l"
            color="orangered"
          >
            Sorry, there are no details for the movie.
          </div>
        </div>
      )}
    </>
  );
};
