import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('components/Layout/Layout'));
const HomePage = lazy(() => import('components/HomePage/HomePage'));
const Movies = lazy(() => import('components/Movies/Movies'));
const MovieDetailsPage = lazy(() =>
  import('components/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const ErrorUrl = lazy(() => import('components/ErrorUrl/ErrorUrl'));

export const App = () => {
  return (
    <>
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
