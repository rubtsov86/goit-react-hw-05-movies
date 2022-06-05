import { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import RenderMovieList from 'components/RenderMovieList';
import Searchbar from 'components/Searchbar';

const Movies = ({ setData }) => {
  const [query, setQuery] = useState('');
  const [movieList, setmovieList] = useState(null);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search === '') {
      return;
    }
    const searchQuery = location.search.slice(1, location.search.length);

    const data = fetchMovies(searchQuery);
    MakeMoviesList(data);
    return;
  }, [location.search]);

  const onSubmit = e => {
    e.preventDefault();
    const data = fetchMovies(query);
    MakeMoviesList(data);
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
    console.log(setData);
    setData(`${location.pathname}${location.search}`);
  };

  const MakeMoviesList = async data => {
    const movieData = await data;
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
    </div>
  );
};

export default Movies;
