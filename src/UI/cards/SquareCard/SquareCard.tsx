import styles from './SquareCard.module.scss';
import { FC } from 'react';

interface ISkillsCard {
  name?: string;
  color?: 'primary' | 'secondary' | 'secondary2' | 'secondary3' | undefined;
  className?: string;
}

const SquareCard: FC<ISkillsCard> = ({
  name,
  color = 'primary',
  className = '',
}) => {
  return (
    <div className={`${styles.squareCard} ${styles[color]} ${className}`}>
      <p>{name}</p>
    </div>
  );
};

export default SquareCard;
