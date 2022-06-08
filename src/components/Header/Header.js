import { NavLink } from 'react-router-dom';

import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.pageHeader}>
      <ul className={s.navList}>
        <li className={s.navListItem}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? s.navLinkActive : s.navLink
            }
          >
            Home
          </NavLink>
        </li>
        <li className={s.navListItem}>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? s.navLinkActive : s.navLink
            }
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
