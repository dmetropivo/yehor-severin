import styles from './Courses.module.scss';
import { useTranslations } from 'use-intl';
import CourseContainer from '@/UI/containers/CourseContainer/CourseContainer';
import { Coursera, creativePractice, projector } from '@/data/courses';

const Courses = () => {
  const t = useTranslations('Home');

  return (
    <div className={styles.coursesContainer}>
      <h2>{t('courses.title')}</h2>
      <div>
        <CourseContainer
          logoIcon={Coursera.iconPath}
          type={Coursera.type}
          company={Coursera.company}
          stillOngoing={Coursera.stillOngoing}
          items={Coursera.items}
          cardColor={'secondary3'}
        />
        <CourseContainer
          logoIcon={creativePractice.iconPath}
          type={creativePractice.type}
          company={creativePractice.company}
          stillOngoing={creativePractice.stillOngoing}
          items={creativePractice.items}
          cardColor={'secondary2'}
        />
        <CourseContainer
          logoIcon={projector.iconPath}
          type={projector.type}
          company={projector.company}
          stillOngoing={projector.stillOngoing}
          items={projector.items}
          cardColor={'primary'}
        />
      </div>
    </div>
  );
};

export default Courses;
