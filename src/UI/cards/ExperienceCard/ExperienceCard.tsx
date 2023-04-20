import styles from './ExperienceCard.module.scss';
import { FC } from 'react';
import Link from 'next/link';

interface IExperienceCard {
  date: string;
  title: string;
  description: string;
  backgroundColor: string;
  buttons: any;
}

const ExperienceCard: FC<IExperienceCard> = ({
  date = '',
  title = '',
  description = '',
  backgroundColor = '#9747FF',
  buttons = [],
}) => {
  return (
    <div
      className={styles.experienceCard}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.textWrapper}>
        <div>
          <p className={styles.date}>{date}</p>
          <p className={styles.title}>{title}</p>
        </div>
        {buttons?.map((item, index) => {
          return (
            <div className={styles.buttonsWrapper} key={index}>
              {item}
            </div>
          );
        })}
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ExperienceCard;
