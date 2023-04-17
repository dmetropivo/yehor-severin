import styles from './SVGButton.module.scss';
import { FC, ReactNode } from 'react';

interface ISvgButton {
  children: ReactNode;
}

const SVGButton: FC<ISvgButton> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.iconButton}>
      {children}
    </button>
  );
};

export default SVGButton;
