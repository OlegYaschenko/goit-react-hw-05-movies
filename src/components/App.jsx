import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
const Layout = lazy(() => import('views/Layout'));
const HomePage = lazy(() => import('views/HomePage'));
const Movies = lazy(() => import('views/Movies'));
const MovieDetailsPage = lazy(() => import('views/MovieDetailsPage'));
const Cast = lazy(() => import('views/Cast'));
const Reviews = lazy(() => import('views/Reviews'));
const ErrorUrl = lazy(() => import('views/ErrorUrl'));

export const App = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<ErrorUrl />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
