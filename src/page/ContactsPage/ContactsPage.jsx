import { Form } from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import styles from './contactsPage.module.css';

const ContactsPage = () => {
  return (
    <div className={styles.page_form}>
      <Form />
      <div className={styles.filter_list}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default ContactsPage;
