import Button from '@/UI/buttons/Button/Button';
import styles from './AboutMe.module.scss';
import { useTranslations } from 'use-intl';

const AboutMe = () => {
  const t = useTranslations('Home');
  return (
    <div className={styles.aboutMeContainer}>
      <h2>{t('aboutMe.title')}</h2>
      <p>{t('aboutMe.text')}</p>
      <div>
        <a href="/CV/CV-7.pdf" target="_blank" rel="noopener noreferrer">
          <Button text={'Download resume'} variant={'primary'} />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
