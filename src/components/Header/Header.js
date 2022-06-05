import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.pageHeader}>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Home
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/movies"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
