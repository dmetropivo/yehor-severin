import styles from './ProjectCard.module.scss';
import { FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import ClothesStorePopup from '@/UI/popups/ClothesStorePopup/ClothesStorePopup';
import { usePopup } from '@/contexts/PopupContext';

// interface IProjectCard {
//   id: string;
//   title?: any;
//   description?: any;
//   backgroundColor?: any;
//   backgroundImage?: any;
//   comingSoon?: any;
//   link?: any;
//   clickable?: any;
// }

// const ProjectImage = ({project}) => {
//
//   switch (project){
//     case ''
//   }
// }

const ProjectCard = ({
  id,
  title = '',
  description = '',
  backgroundColor = '',
  backgroundImage = null,
  comingSoon = false,
  link = '',
  clickable = false,
}) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const popup: any = usePopup();

  const handleClick = () => {
    if (id === 'clothesStore') {
      /* eslint-disable no-eval */
      popup();
      setPopupOpen(true);
    }

    if (link) {
      window.open(link, '_blank').focus();
      return;
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`${styles.projectCard} ${clickable ? styles.clickable : ''}`}
      >
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
      {popupOpen ? <ClothesStorePopup /> : <></>}
    </>
  );
};

export default ProjectCard;
