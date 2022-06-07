import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit, query, onChange }) => {
  return (
    <div className={s.container}>
      <form onSubmit={onSubmit}>
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={onChange}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};
