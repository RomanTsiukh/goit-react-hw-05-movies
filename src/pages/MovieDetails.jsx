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
          <div>
            <Link to={backLinkHref}>Go back</Link>
            <MovieCard movie={movie} />
            <div>
              <h2>Additional information</h2>
              <ul>
                <li>
                  <Link to="cast" state={backLinkHref}>
                    Cast
                  </Link>
                </li>
              </ul>

              <Outlet />
            </div>
          </div>
        </div>
      )}
      {status === 'rejected' && (
        <div>
          <Link to="/">Go home</Link>
          <div>Sorry, there are no details for the movie.</div>
        </div>
      )}
    </>
  );
};
