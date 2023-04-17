import Button from '@/UI/buttons/Button/Button';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <h2>About me</h2>
      <p>
        My name is Egor, at the moment I work as a UI designer at NovlaSoft,
        which specializes in mobile applications for the App Store .I've been
        doing UI/Ux design for 1 year and 7 months, last 5 month, I’ve been
        focusing on building iOS apps . I make websites and mobile applications,
        also adaptive or responsive design. At NovlaSoft, I am responsible for
        full-fledged design development, from wireframes to screenshots in the
        app store.
      </p>
      <div>
        <Button text={'Download resume'} variant={'primary'} />
      </div>
    </div>
  );
};

export default AboutMe;
