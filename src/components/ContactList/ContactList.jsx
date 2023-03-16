import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllContacts } from 'redux/contacts/contactsOperations';
import ContactItem from './ContactItem/ContactItem';
import styles from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(store => store.contacts.items);
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const listContactsByFilter = filterContacts();

  return (
    <ol className={styles.list}>
      {listContactsByFilter.map(({ id, name, number }) => {
        return <ContactItem key={id} name={name} number={number} nameId={id} />;
      })}
    </ol>
  );
};

export default ContactList;
