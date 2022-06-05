import { Link } from 'react-router-dom';

const RenderMovieList = ({ arrayOfMovies, onClick }) => {
  return (
    <ul>
      {arrayOfMovies.map(({ id, title }) => (
        <li key={id}>
          <Link onClick={onClick} to={`/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RenderMovieList;
