'use client';

import React, { useState } from 'react';
import SubmitButton from '@Components/SubmitButton';
import styles from './styles.module.css';

import searchAction from './actions';


function FormSearch() {
  const [term, setTerm] = useState('');

  return (
    <form className={styles['form-search']}>
      <input
        type="text"
        name='term'
        className={styles['form-input']}
        placeholder="Search place"
      />

      <SubmitButton label='Search' className={styles['btn-search']} />
    </form>
  );
}


export default FormSearch;
