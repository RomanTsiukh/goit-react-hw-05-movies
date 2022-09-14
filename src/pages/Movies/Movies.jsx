import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieBySearch } from 'services/api';
import { DEFAULT_IMG, IMG_PATH } from 'constants/constants';
import Loader from 'components/Loader/Loader';
import { Form, List, Img } from './Movies.styled';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieTitleQuery = searchParams.get('query') ?? '';

  const [status, setStatus] = useState('idle');

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieTitleQuery !== '') {
      async function getMovies() {
        try {
          setStatus('pending');
          const response = await getMovieBySearch(movieTitleQuery);
          setMovies(response);
          setStatus('resolved');
        } catch (error) {
          setStatus('rejected');
        }
      }
      getMovies();
    }
  }, [movieTitleQuery]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function getMovies() {
      try {
        setStatus('pending');
        const response = await getMovieBySearch(searchQuery);
        setMovies(response);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
      }
    }
    getMovies();
  }, [searchQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.query.value;
    setSearchQuery(inputValue);
    updateQueryString(inputValue);
    e.target.reset();
  };

  return (
    <>
      <div>
        <div>
          <Form onSubmit={onSubmit}>
            <input type="text" name="query" placeholder="Movie search" />
            <button type="submit">Search</button>
          </Form>
          {movies.length !== 0 && (
            <List>
              {movies.map(({ id, title, poster_path }) => {
                return (
                  <li key={id}>
                    <Link to={`${id}`} state={{ from: location }}>
                      <Img
                        src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
                        alt={title}
                        loading="lazy"
                      />
                      <p>{title.toUpperCase()}</p>
                    </Link>
                  </li>
                );
              })}
            </List>
          )}
          {status === 'pending' && <Loader />}
        </div>
      </div>
    </>
  );
};

export default Movies;
