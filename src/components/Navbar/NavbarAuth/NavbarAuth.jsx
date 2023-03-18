import { NavLink } from 'react-router-dom';

import styles from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/register" className={styles.link}>
        Register
      </NavLink>
      <div>|</div>

      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
