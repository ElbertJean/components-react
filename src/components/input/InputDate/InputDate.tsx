'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import styles from './InputDate.module.css';

type InputProps = {
  label: string;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const InputDate = (props: InputProps) => {

  const { label, onChange, ...rest } = props;
  const [isSelectFocused, setIsSelectFocused] = useState(false);
  const [dateSelected, setDateSelected] = useState(false);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDateSelected(!!value);
    onChange && onChange(value);
  };

  return(
    <div className={styles.container}>
      <input
        type='date'
        className={`${styles.input} ${dateSelected ? styles.dateSelected : ''}`} 
        onFocus={() => setIsSelectFocused(true)} 
        onBlur={() => setIsSelectFocused(false)}
        onChange={handleDateChange}
        {...rest}
      />
      <label className={`${styles.label} ${isSelectFocused ? styles.focused : ''} ${styles.elevated}`}>
        {label}
      </label>
    </div>
  )
}

export default InputDate;