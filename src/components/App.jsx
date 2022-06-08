import Header from './Header';

import { lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const PopularMoviesList = lazy(() =>
  import('views/PopularMoviesList' /* webpackChunkName: "home-page" */)
);

const Movies = lazy(() =>
  import('views/Movies' /* webpackChunkName: "Movies" */)
);

const MovieCard = lazy(() =>
  import('views/MovieCard' /* webpackChunkName: "MoviesCard" */)
);

export function App() {
  const [pathToGoBack, setPathToGoBack] = useState('/goit-react-hw-05-movies');

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Загрузка</div>}>
        <Routes>
          <Route
            path="/"
            element={<PopularMoviesList setPathToGoBack={setPathToGoBack} />}
          />
          <Route
            path="/movies"
            element={<Movies setPathToGoBack={setPathToGoBack} />}
          ></Route>
          <Route
            path="/movies/:movieId/*"
            element={<MovieCard pathToGoBack={pathToGoBack} />}
          ></Route>
          <Route element={<h2>404 error, this page doesn't exist</h2>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
