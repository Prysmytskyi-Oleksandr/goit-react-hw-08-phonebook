import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/auth/authSelectors';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  return (
    <div>
      {name}, <button>Logout</button>
    </div>
  );
};

export default NavbarUser;
