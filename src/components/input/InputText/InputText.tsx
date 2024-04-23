'use client';

import React, { InputHTMLAttributes, useState } from 'react';
import styles from './InputText.module.css';

type InputProps = {
  label?: string;
  onChange?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const InputLabel = (props: InputProps) => {
  const { label, onChange, ...rest } = props;

  const [valor, setValor] = useState('');
  const [placeholderElevado, setPlaceholderElevado] = useState(false);
  const inputId = `input-${label}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setValor(value);
    onChange && onChange(value);
  };

  const handleFocus = () => {
    setPlaceholderElevado(true);
  };

  const handleBlur = () => {
    if (valor === '') {
      setPlaceholderElevado(false);
    }
  };

  return (
    <div className={styles.inputContainer} >
      <input
        id={inputId}
        className={styles.input}
        type="text"
        value={valor}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
      <label className={`${styles.label} ${placeholderElevado || valor !== '' ? styles.elevated : styles.labelInput}`} htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};

export default InputLabel;