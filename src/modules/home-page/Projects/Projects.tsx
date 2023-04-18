import styles from './Projects.module.scss';
import { useTranslations } from 'use-intl';
import ProjectCard from '@/UI/cards/ProjectCard/ProjectCard';

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
            />
          );
        })}
      </div>
    </div>
  );
};

const projects = [
  {
    id: 'octoTower',
    title: 'Octo Tower',
    description:
      'The project was created for a coffee shop that includes a coffee shop and a co-working space.',
  },
  {
    id: 'playStore',
    title: 'Play Store',
    description: 'A mobile application for the world of games',
  },
  {
    id: 'cvMaker',
    title: 'СV maker',
    description: 'Create cv easily',
  },
  {
    id: 'clothesStore',
    title: 'Clothes store',
    description:
      'Clothing store, which is made from the assembly of components',
  },
  {
    id: 'designSystem',
    title: 'Design System',
    description: 'Inspiration for the apartment, furniture, design',
  },
  {
    id: 'icons',
    title: 'Icons',
    description: null,
  },
  {
    id: 'itCourses',
    title: 'It courses',
    description: 'Landing page for frontend courses',
  },
];

export default Projects;
