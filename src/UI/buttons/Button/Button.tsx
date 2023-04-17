import { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  variant?: 'primary' | 'secondary';
  text?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

const Button: FC<IButton> = ({
  variant = 'primary',
  text,
  disabled = false,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${styles.button} ${styles[`${variant}`]}`}
    >
      {text}
    </button>
  );
};

export default Button;
