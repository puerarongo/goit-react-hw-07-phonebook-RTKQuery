import React from 'react';
import Loader from 'components/loader/Loader';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/operations/contacts-operation';
import { useSelector } from 'react-redux';
import styles from './ContactList.module.css';

const ContactList = () => {
  const { isLoading, data } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filterContact = useSelector(state => state.filter);

  const filtredContacts = () => {
    return data.filter(({ name }) =>
      name.toLowerCase().includes(filterContact.toLowerCase())
    );
  };

  return (
    <div className={styles.container}>
      <ul>
        {isLoading ? (
          <Loader />
        ) : (
          data &&
          filtredContacts().map(({ id, name, phone }) => {
            return (
              <li key={id} className={styles.contact}>
                <span>
                  {name}: {phone}
                </span>
                <button
                  className={styles.button__delete}
                  type="button"
                  onClick={() => deleteContact(id)}
                >
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ContactList;
