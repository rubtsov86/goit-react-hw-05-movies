import {
  useRouteMatch,
  Route,
  Switch,
  useHistory,
  useParams,
} from 'react-router-dom';
import axios from 'axios';
import { lazy, Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RenderMovieCard from 'components/RenderMovieCard';

const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "Cast" */)
);

const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "Reviews" */)
);

const MovieCard = ({ pathToGoBack }) => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const fetchMovieCard = () => {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=81b3ecea3e846c75ec6e45ca643cbb3c`;
      const response = axios.get();
      return response;
    };

    const MakeMovieCard = async () => {
      const { data } = await fetchMovieCard();
      setMovie(data);
    };
    MakeMovieCard();
  }, [movieId]);

  const onClickGoBack = () => {
    if (pathToGoBack) {
      history.push(pathToGoBack);
      return;
    }
    history.push('/goit-react-hw-05-movies');
  };

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    title && (
      <>
        <RenderMovieCard
          onClickGoBack={onClickGoBack}
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
          url={url}
        />
        <Suspense fallback={<div>Загрузка</div>}>
          <Switch>
            <Route path={`${url}/Cast`}>
              <Cast movieId={movieId} />
            </Route>
            <Route path={`${url}/Reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </Suspense>
      </>
    )
  );
};

export default MovieCard;

MovieCard.propTypes = {
  pathToGoBack: PropTypes.string.isRequired,
};
