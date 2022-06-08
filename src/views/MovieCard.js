import { Route, Routes, useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const url = `/movies/${movieId}`;

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
    console.log(pathToGoBack);
    if (pathToGoBack) {
      navigate(pathToGoBack);
      return;
    }
    navigate('/');
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
          <Routes>
            <Route path={`/Cast`} element={<Cast movieId={movieId} />}></Route>
            <Route
              path={`/Reviews`}
              element={<Reviews movieId={movieId} />}
            ></Route>
          </Routes>
        </Suspense>
      </>
    )
  );
};

export default MovieCard;

MovieCard.propTypes = {
  pathToGoBack: PropTypes.string.isRequired,
};
