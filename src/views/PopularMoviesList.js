import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import RenderMovieList from '.././components/RenderMovieList';

const PopularMoviesList = ({ setData }) => {
  const [popularMoviesList, setPopularMoviesList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const fetchPopularMoviesList = () => {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/trending/movie/day?api_key=81b3ecea3e846c75ec6e45ca643cbb3c`;
      const response = axios.get();
      return response;
    };

    const MakeMoviesList = async () => {
      const moviesResponse = await fetchPopularMoviesList();
      const moviesListName = moviesResponse.data.results.map(
        ({ title, id }) => {
          return { title, id };
        }
      );
      setPopularMoviesList([...moviesListName]);
    };

    MakeMoviesList();
  }, []);

  const onClick = () => {
    setData(`${location.pathname}`);
  };

  return (
    <div>
      <h2>Trending today</h2>
      {popularMoviesList.length !== 0 && (
        <RenderMovieList arrayOfMovies={popularMoviesList} onClick={onClick} />
      )}
    </div>
  );
};

export default PopularMoviesList;
