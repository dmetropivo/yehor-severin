import styles from './Projects.module.scss';
import { useTranslations } from 'use-intl';
import ProjectCard from '@/UI/cards/ProjectCard/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  const t = useTranslations('Home');

  return (
    <div className={styles.projectsContainer}>
      <h2>{t('projects.title')}</h2>
      <div className={styles.projectList}>
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              id={item.id}
              title={item.title}
              description={item.description}
              backgroundImage={item.backgroundImage}
              comingSoon={item.comingSoon}
              link={item.link}
              clickable={item.clickable}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
