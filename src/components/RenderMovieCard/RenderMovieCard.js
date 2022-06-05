import { NavLink } from 'react-router-dom';
import s from './RenderMovieCard.module.css';
import svg from './arrow-left2.svg';

const RenderMovieCard = ({
  onClickGoBack,
  poster_path,
  title,
  vote_average,
  overview,
  genres,
  url,
}) => {
  return (
    <>
      <div className={s.container}>
        <div className="poster-wrapper">
          <button type="button" className={s.button} onClick={onClickGoBack}>
            <img src={svg} width="15" className={s.icon} alt="left-arrow" />
            Go back
          </button>

          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
            className={s.imgPoster}
          />
        </div>
        <div className={s.descriptionWrapper}>
          <h2>{title}</h2>
          <p>User Score: {vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <h2>Список</h2>
        <ul>
          <li>
            <NavLink to={`${url}/Cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/Reviews`}>Reviews</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RenderMovieCard;
