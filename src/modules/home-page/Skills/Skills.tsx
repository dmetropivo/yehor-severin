import styles from './Skills.module.scss';
import { useTranslations } from 'use-intl';
import SkillsSlider from '@/UI/sliders/SkillsSlider/SkillsSlider';
import { hardSkills, softSkills } from '@/data/skills';
import SquareCard from '@/UI/cards/SquareCard/SquareCard';

const Skills = () => {
  const t = useTranslations('Home');

  return (
    <div className={styles.skillsContainer}>
      <h2>{t('skills.title')}</h2>
      <div>
        <p>{t('skills.hard')}</p>
        <div>
          <SkillsSlider
            slidesData={hardSkills}
            SlideCard={SquareCard}
            cardsColor={'secondary'}
          />
        </div>
      </div>
      <div>
        <p>{t('skills.soft')}</p>
        <div>
          <SkillsSlider
            slidesData={softSkills}
            SlideCard={SquareCard}
            cardsColor={'primary'}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
