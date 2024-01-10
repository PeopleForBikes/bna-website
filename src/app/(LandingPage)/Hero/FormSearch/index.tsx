'use client';

import React, { useState } from 'react';
import { useFormState } from 'react-dom';
import SubmitButton from '@Components/SubmitButton';
import styles from './styles.module.css';

import searchAction from './actions';


function FormSearch() {
  const initialState = { success: false, errors: {} };
  const [serverReply, formAction] = useFormState(searchAction, initialState);
  const [term, setTerm] = useState('');

  return (
    <form className={styles['form-search']} action={formAction}>
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
