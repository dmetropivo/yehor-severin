import styles from './PhotoSlider.module.scss';
import { FC } from 'react';
import { Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';

interface IPhotoSlider {
  slidesData: object[];
  SlideCard: FC<any>;
  initialSlide?: number;
}

export const PhotoSlider: FC<IPhotoSlider> = ({
  slidesData,
  SlideCard,
  initialSlide = 0,
}) => {
  return (
    <div className={styles.photoSlider}>
      <Swiper
        slidesPerView="auto"
        grabCursor
        spaceBetween={44}
        slidesPerGroup={1}
        modules={[Navigation]}
        className={styles.swiper}
        initialSlide={0}
      >
        {slidesData?.map(
          (slide, i) =>
            slide && (
              <SwiperSlide key={i}>
                <SlideCard {...slide} />
              </SwiperSlide>
            ),
        )}
      </Swiper>
    </div>
  );
};

export default PhotoSlider;
