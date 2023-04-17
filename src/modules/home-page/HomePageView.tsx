import HeaderHome from '@/modules/home-page/HeaderHome/HeaderHome';
import styles from './HomePageView.module.scss';
import AboutMe from '@/modules/home-page/AboutMe/AboutMe';

const HomePageView = () => {
  return (
    <div className={styles.homePageViewContainer}>
      <div className={styles.safeAreaContainer}>
        <HeaderHome />
      </div>
      <div className={styles.safeAreaContainer}>
        <AboutMe />
      </div>
    </div>
  );
};

export default HomePageView;
