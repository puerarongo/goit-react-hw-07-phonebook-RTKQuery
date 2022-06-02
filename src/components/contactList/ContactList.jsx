import React from 'react';
import Loader from 'components/loader/Loader';
import styles from './ContactList.module.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/operations/contacts-operation';

const ContactList = () => {
  const contact = { name: 'Vano', phone: '333-33-33' };
  const { data } = useGetContactsQuery();
  const add = useAddContactMutation(contact);
  //console.log(data)
  console.log('Fetch', data);
  console.log('Add', add);

  return (
    <div className={styles.container}>
      <ul>
        {1 < 0 ? (
          <Loader />
        ) : (
          data.map(({ id, name, phone }) => {
            return (
              <li key={id} className={styles.contact}>
                <span>
                  {name}: {phone}
                </span>
                <button
                  className={styles.button__delete}
                  type="button"
                  onClick={() => console.log(id)}
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
