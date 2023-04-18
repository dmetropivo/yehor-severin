import styles from './Experience.module.scss';
import ExperienceCard from '@/UI/cards/ExperienceCard/ExperienceCard';
import { useTranslations } from 'use-intl';
import SVGButton from '@/UI/buttons/SVGButton/SVGButton';
import BehanceIcon from 'public/svg/behanceIcon.svg';
import Link from 'next/link';

const BehanceButton = () => {
  return (
    <Link href={'/'} passHref>
      <SVGButton className={styles.behanceButton}>
        <BehanceIcon />
      </SVGButton>
    </Link>
  );
};
const experiences = [
  {
    date: 'experience.first.date',
    title: 'experience.first.title',
    description: 'experience.first.description',
    backgroundColor: '#9747FF',
    buttons: [<BehanceButton />],
  },
  {
    date: 'experience.second.date',
    title: 'experience.second.title',
    description: 'experience.second.description',
    backgroundColor: '#2C862A',
    buttons: null,
  },
];

const Experience = () => {
  const t = useTranslations('Home');
  return (
    <div className={styles.experienceContainer}>
      <h2>Experience</h2>
      <div className={styles.experienceList}>
        {experiences.map((item, index) => {
          return (
            <ExperienceCard
              key={index}
              date={t(`${item.date}`) || ''}
              title={t(`${item.title}`) || ''}
              description={t(`${item.description}`) || ''}
              backgroundColor={item.backgroundColor}
              buttons={item?.buttons}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
