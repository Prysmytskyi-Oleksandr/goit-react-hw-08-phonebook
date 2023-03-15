import { Navbar } from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
