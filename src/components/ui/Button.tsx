'use client';

import React, { forwardRef } from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', className = '', ...props }, ref) => {
    const rootClass = `${styles.root} ${styles[variant]} ${className}`.trim();
    return (
      <button ref={ref} className={rootClass} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
