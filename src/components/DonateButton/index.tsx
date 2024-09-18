'use client';

import { useFormStatus } from 'react-dom';

import ClipLoader from 'react-spinners/ClipLoader';
import styles from './styles.module.css';


function DonateButton() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' aria-disabled={pending} className={styles['button']}>
      { pending
        ? <ClipLoader color="#FFFFFF" />
        : 'Submit'
      }
    </button>
  );
}


export default DonateButton;
