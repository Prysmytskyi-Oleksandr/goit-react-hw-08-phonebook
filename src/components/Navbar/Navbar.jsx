import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { isUserLogin } from 'redux/auth/authSelectors';

export const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={styles.navbar}>
      {
        <NavLink to="/" className={styles.home}>
           Home
        </NavLink>
      }
      <div>
        {!isLogin && <NavbarAuth />}
        {isLogin && <NavbarUser />}
      </div>
    </div>
  );
};
