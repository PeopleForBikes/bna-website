'use client';

import React, { useState } from 'react';
import styles from './styles.module.css';


function FormSearch() {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form className={styles['form-search']} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles['form-input']}
        placeholder="Search place"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        type="submit"
        className={`btn ${styles['btn-search']}`}
        onClick={() => console.log('Dontate Button')}
      >
        Search
      </button>
    </form>
  );
}


export default FormSearch;
