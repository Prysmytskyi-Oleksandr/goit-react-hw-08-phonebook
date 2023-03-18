import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser } from '../../../redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

import styles from './navbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <NavLink to="/contacts" className={styles.registered_name}>
        {name}
      </NavLink>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavbarUser;
