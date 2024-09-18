'use client';

import styles from './styles.module.css';


interface Props {
  id: string;
  className?: string;
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function TextInput({
  id, label, name, placeholder, value, className='', errorMessage="", onChange
}: Props) {
  return (
    <div
      className={`${styles['text-input-item']} ${className}`}>
      <div className={styles['header']}>
        <label htmlFor={id}>{label}</label>
        <p className={styles['error-message']}>
          {errorMessage}
        </p>
      </div>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}


export default TextInput;
