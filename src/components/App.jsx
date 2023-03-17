import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const HomePage = lazy(() => import('page/HomePage/HomePage'));
const RegisterPage = lazy(() => import('page/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('page/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('page/ContactsPage/ContactsPage'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<ContactsPage />} />
          </Route>

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

// import { Form } from './Form/Form.jsx';
// import ContactList from './ContactList/ContactList.jsx';
// import Filter from './Filter/Filter.jsx';

// export const App = () => {
//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <Form />

//       <h2>Contacts</h2>
//       <Filter />

//       <ContactList />
//     </div>
//   );
// };
