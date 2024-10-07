'use client';

import ClipLoader from 'react-spinners/ClipLoader';
import styles from './styles.module.css';


interface Props {
  className?: string;
  isDisabled?: boolean;
  isPending?: boolean;
  formId?: string;
  label: string;
  style?: Record<string, string>;
  spinnerColor?: string;
}

function SubmitButton({ className='', isDisabled=false, isPending=false, formId='', label='submit', style={}, spinnerColor='#FFFFFF' }: Props) {
  return (
    <button
      style={style}
      form={formId}
      type='submit'
      disabled={isDisabled}
      aria-disabled={isDisabled}
      className={`${styles['button']} ${className}`}
    >
      {isPending
        ? <ClipLoader color={spinnerColor} loading={true} size={30} />
        : label
      }
    </button>
  );
}


export default SubmitButton;
