import HeaderHome from '@/modules/home-page/HeaderHome/HeaderHome';
import styles from './HomePageView.module.scss';
import AboutMe from '@/modules/home-page/AboutMe/AboutMe';
import Experience from '@/modules/home-page/Experience/Experience';
import Projects from '@/modules/home-page/Projects/Projects';

const HomePageView = () => {
  return (
    <div>
      <div
        id="aboutMe"
        className={`${styles.safeAreaContainer} ${styles.aboutMeContainer}`}
      >
        <HeaderHome />
        <AboutMe />
        <Experience />
      </div>
      <div
        id={'projects'}
        className={`${styles.safeAreaContainer} ${styles.projectsContainer}`}
      >
        <Projects />
      </div>
    </div>
  );
};

export default HomePageView;
