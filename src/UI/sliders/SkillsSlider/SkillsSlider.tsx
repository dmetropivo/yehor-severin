import styles from './SkillsSlider.module.scss';
import { FC } from 'react';
import { Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

interface ISkillsSlider {
  slidesData: object[];
  SlideCard: FC<any>;
  initialSlide?: number;
  cardsColor?: 'primary' | 'secondary' | 'secondary2' | 'secondary3';
}

const SkillsSlider: FC<ISkillsSlider> = ({
  slidesData,
  SlideCard,
  initialSlide = 0,
  cardsColor = 'primary',
}) => {
  return (
    <div className={styles.skillsSlider}>
      <Swiper
        slidesPerView="auto"
        grabCursor
        spaceBetween={20}
        slidesPerGroup={1}
        modules={[Navigation]}
        className={styles.swiper}
        initialSlide={0}
      >
        {slidesData?.map(
          (slide, i) =>
            slide && (
              <SwiperSlide key={i}>
                <SlideCard color={cardsColor} {...slide} />
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </div>
  );
};

export default SkillsSlider;
