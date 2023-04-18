import styles from './ProjectCard.module.scss';
import { FC, ReactNode } from 'react';

interface IProjectCard {
  id: string;
  title?: string | null;
  description?: string | null;
}

const ProjectCard: FC<IProjectCard> = ({
  id,
  title = '',
  description = '',
}) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageSection}>{title}</div>
      <div className={styles.textSection}>{description}</div>
    </div>
  );
};

export default ProjectCard;
