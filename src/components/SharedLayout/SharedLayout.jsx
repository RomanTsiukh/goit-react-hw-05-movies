import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header, Navigation, Link } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <Navigation>
          <Link to="/" state={{ from: location }}>
            Home
          </Link>
          <Link to="/movies" state={{ from: location }}>
            Movies
          </Link>
        </Navigation>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
