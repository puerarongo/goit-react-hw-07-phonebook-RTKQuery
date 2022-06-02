import React from 'react';
import styles from './Filter.module.css';

const Filter = () => {
  return (
    <div className={styles.container}>
      <label>
        Find contacts by name:
        <input
          className={styles.form__input}
          type="text"
          name="filter"
          value={3}
          onChange={3}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
