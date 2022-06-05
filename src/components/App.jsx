import Header from './Header';

import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

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

  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <Suspense fallback={<div>Загрузка</div>}>
        <Switch>
          <Route path="/goit-react-hw-05-movies/movies" exact>
            <Movies setPathToGoBack={setPathToGoBack} />
          </Route>
          <Route path="/goit-react-hw-05-movies/movies/:movieId">
            <MovieCard pathToGoBack={pathToGoBack} />
          </Route>
          <Route path="/goit-react-hw-05-movies">
            <PopularMoviesList setPathToGoBack={setPathToGoBack} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
