import Header from './Header';

import { lazy, Suspense, useState } from 'react';
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
  const [data, setData] = useState(null);
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Загрузка</div>}>
        <Switch>
          <Route path="/" exact>
            <PopularMoviesList setData={setData} />
          </Route>
          <Route path="/movies" exact>
            <Movies setData={setData} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieCard data={data} />
          </Route>
          <Route>
            <h2>Страница не найдена</h2>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
