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
        <Button text={'Download resume'} variant={'primary'} />
      </div>
    </div>
  );
};

export default AboutMe;
