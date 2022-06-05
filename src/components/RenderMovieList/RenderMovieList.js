import { Link } from 'react-router-dom';
import s from './RenderMovieList.module.css';
import PropTypes from 'prop-types';

const RenderMovieList = ({ arrayOfMovies, onClick }) => {
  return (
    <ul>
      {arrayOfMovies.map(({ id, title }) => (
        <li className={s.item} key={id}>
          <Link onClick={onClick} to={`/goit-react-hw-05-movies/movies/${id}`}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RenderMovieList;

RenderMovieList.propTypes = {
  onClick: PropTypes.func.isRequired,
  arrayOfMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
