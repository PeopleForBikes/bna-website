'use client';

import { useFormStatus } from 'react-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import styles from './styles.module.css';


function SubmitButton({ label='submit', className='' }) {
  const { pending } = useFormStatus();

  return (
    <button type='submit' aria-disabled={pending} className={`${styles['button']} ${className}`}>
      { pending
        ? <ClipLoader color="#FFFFFF" />
        : label
      }
    </button>
  );
}


export default SubmitButton;
