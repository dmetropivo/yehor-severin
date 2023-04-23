import styles from './ProjectCard.module.scss';
import { FC, ReactNode } from 'react';
import Image from 'next/image';

interface IProjectCard {
  id: string;
  title?: string | null;
  description?: string | null;
  backgroundColor?: string | '';
  backgroundImage?: any;
  comingSoon?: boolean;
}

// const ProjectImage = ({project}) => {
//
//   switch (project){
//     case ''
//   }
// }

const ProjectCard: FC<IProjectCard> = ({
  id,
  title = '',
  description = '',
  backgroundColor = '',
  backgroundImage = null,
  comingSoon = false,
}) => {
  return (
    <div className={styles.projectCard}>
      {/*<div className={styles.projectCard}>*/}
      {/*<Image src={backgroundImage} alt={'Project'} />*/}
      {/*</div>*/}
      <div
        // style={{
        //   backgroundColor: backgroundColor,
        // }}
        className={styles.imageSection}
      >
        {backgroundImage ? (
          <Image
            className={styles.backgroundImage}
            width={508}
            height={402}
            src={backgroundImage}
            alt={'Project'}
          />
        ) : (
          <></>
        )}
        {comingSoon ? (
          <div className={styles.comingSoon}>Coming soon</div>
        ) : (
          <></>
        )}
      </div>
      <div className={styles.textSection}>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
