import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/api';
import { MovieCard } from 'components/MovieCard';

export const MovieDetails = () => {
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
    <>
      {status === 'resolved' && (
        <div>
          <div p="5">
            <Link to={backLinkHref}>Go back</Link>
            <MovieCard movie={movie} />
            <div>
              <div
                as="h2"
                // textAlign={'center'}
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
      {status === 'rejected' && (
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
