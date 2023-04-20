import HeaderHome from '@/modules/home-page/HeaderHome/HeaderHome';
import styles from './HomePageView.module.scss';
import AboutMe from '@/modules/home-page/AboutMe/AboutMe';
import Experience from '@/modules/home-page/Experience/Experience';
import Projects from '@/modules/home-page/Projects/Projects';
import 'swiper/css';
import 'swiper/css/navigation';
import Skills from '@/modules/home-page/Skills/Skills';
import Courses from '@/modules/home-page/Courses/Courses';

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
      <div id={'skills'} className={styles.skillsContainer}>
        <Skills />
      </div>
      <div
        id={'courses'}
        className={`${styles.safeAreaContainer} ${styles.coursesContainer}`}
      >
        <Courses />
      </div>
    </div>
  );
};

export default HomePageView;
