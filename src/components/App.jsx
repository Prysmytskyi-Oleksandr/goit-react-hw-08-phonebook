import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from './Layout/Layout';

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
          <Route>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/contacts" element={<ContactsPage />} />
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
