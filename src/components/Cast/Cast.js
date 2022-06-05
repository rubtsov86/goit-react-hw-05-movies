import { useEffect, useState } from 'react';
import defaultImage from './profile.png';
import axios from 'axios';
import s from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [castList, setCastList] = useState(null);
  useEffect(() => {
    const fetchCast = () => {
      axios.defaults.baseURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=81b3ecea3e846c75ec6e45ca643cbb3c&language=en-US`;
      const response = axios.get();
      return response;
    };

    const MakeCastData = async () => {
      const { data } = await fetchCast();
      const dataToSet = data.cast.map(
        ({ character, name, profile_path, id }) => ({
          character,
          name,
          profile_path,
          id,
        })
      );
      setCastList(dataToSet);
    };

    MakeCastData();
  }, [movieId]);

  return (
    castList && (
      <ul>
        {castList.map(({ character, name, profile_path, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImage
              }
              alt={name}
              className={s.image}
            />
            <h3>{name}</h3>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
