'use client';

import React, { forwardRef } from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    const rootClass = `${styles.root} ${className}`.trim();
    return (
      <div className={rootClass}>
        {label && <label className={styles.label}>{label}</label>}
        <input ref={ref} className={styles.input} {...props} />
        {error && <p className={styles.error}>{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
