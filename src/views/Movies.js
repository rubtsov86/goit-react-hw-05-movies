import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import RenderMovieList from 'components/RenderMovieList';
import Searchbar from 'components/Searchbar';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types';

const Movies = ({ setPathToGoBack }) => {
  const [query, setQuery] = useState('');
  const [movieList, setmovieList] = useState([]);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const searchQuery = location.search.slice(1, location.search.length);

    const data = fetchMovies(searchQuery);
    MakeMoviesList(data);
  }, [location.search]);

  const onSubmit = e => {
    e.preventDefault();
    setmovieList([]);
    if (!query) {
      toast.error('nothing to show, fill input', {
        duration: 1500,
        position: 'top-left',
      });

      return;
    }
    const data = fetchMovies(query);
    MakeMoviesList(data);
    console.log(MakeMoviesList(data));

    history.push({ ...location, search: query });

    setQuery('');
  };

  const onChange = e => {
    setQuery(e.currentTarget.value);
  };

  const fetchMovies = name => {
    axios.defaults.baseURL = `https://api.themoviedb.org/3/search/movie?api_key=81b3ecea3e846c75ec6e45ca643cbb3c&query=${name}`;
    const response = axios.get();
    return response;
  };

  const onClick = () => {
    setPathToGoBack(`${location.pathname}${location.search}`);
  };

  const MakeMoviesList = async data => {
    const movieData = await data;
    if (movieData.data.results.length === 0) {
      setQuery('');
      toast.error('no movies found, try something else', {
        duration: 1500,
        position: 'top-left',
      });

      return;
    }

    const newMovieList = movieData.data.results.map(film => {
      return { title: film.title, id: film.id };
    });
    setmovieList([...newMovieList]);
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} query={query} onChange={onChange} />
      {movieList && (
        <RenderMovieList arrayOfMovies={movieList} onClick={onClick} />
      )}
      <Toaster />
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  setPathToGoBack: PropTypes.func.isRequired,
};
