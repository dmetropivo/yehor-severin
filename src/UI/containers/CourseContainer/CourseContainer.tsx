import styles from './CourseContainer.module.scss';
import { FC } from 'react';
import SquareCard from '@/UI/cards/SquareCard/SquareCard';
import Image from 'next/image';

interface ICourseContainer {
  logoIcon?: any;
  type?: string;
  company?: string;
  stillOngoing?: boolean;
  items?: any;
  cardColor?: 'primary' | 'secondary' | 'secondary2' | 'secondary3' | undefined;
}

const CourseContainer: FC<ICourseContainer> = ({
  logoIcon,
  type,
  company,
  stillOngoing = false,
  items,
  cardColor = 'primary',
}) => {
  return (
    <div className={styles.courseContainer}>
      <div className={styles.infoSection}>
        <div>
          <Image
            width={52}
            height={52}
            src={`${logoIcon}`}
            alt={'Company logo'}
          />
        </div>
        <div>
          <p>{type}</p>
          <p>{company}</p>
        </div>
        {stillOngoing ? (
          <p className={styles.stillOngoing}>
            <span>Still ongoing</span>
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.itemsSection}>
        {items.map((item, index) => {
          return (
            <SquareCard
              className={styles.mobSquare}
              key={index}
              name={item.name}
              color={cardColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CourseContainer;
