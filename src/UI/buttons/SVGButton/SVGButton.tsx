import styles from './SVGButton.module.scss';
import { FC, ReactNode } from 'react';

interface ISvgButton {
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const SVGButton: FC<ISvgButton> = ({ children, onClick, className = '' }) => {
  return (
    <button onClick={onClick} className={`${styles.iconButton} ${className}`}>
      {children}
    </button>
  );
};

export default SVGButton;
