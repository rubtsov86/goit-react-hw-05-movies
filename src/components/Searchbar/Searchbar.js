import s from './Searchbar.module.css';

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
