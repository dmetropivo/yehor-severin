import styles from './ClothesStorePopup.module.scss';
import Image from 'next/image';
import PhotoSlider from '@/UI/sliders/PhotoSlider/PhotoSlider';
import { projectsImage } from '@/data/projectsImage';

const ImageSlide = ({ image }) => {
  console.log(image);
  return (
    <img
      className={styles.image}
      width={942}
      height={766}
      src={image}
      alt={'Project'}
    />
  );
};

const ClothesStorePopup = ({ open, handleClose }) => {
  if (!open) {
    return <></>;
  }
  return (
    <div className={styles.clothesStorePopup}>
      <div className={styles.popupHeader}>
        <p></p>
        <div className={styles.buttonClose} onClick={handleClose}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_123_141)">
              <path
                d="M24 4C35.06 4 44 12.94 44 24C44 35.06 35.06 44 24 44C12.94 44 4 35.06 4 24C4 12.94 12.94 4 24 4ZM31.18 14L24 21.18L16.82 14L14 16.82L21.18 24L14 31.18L16.82 34L24 26.82L31.18 34L34 31.18L26.82 24L34 16.82L31.18 14Z"
                fill="#F8F8F8"
                fill-opacity="0.9"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_123_141"
                x="-20"
                y="-20"
                width="88"
                height="88"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_123_141"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_123_141"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className={styles.topSection}>
        <p className={styles.titlePopup}>Clothes Store</p>
        <div className={styles.textSection}>
          <p>
            A start-up project for a clothing store, with the help of
            components, the design adapts to the color
          </p>
          <p>Breakpoint: 1024,768,360</p>
        </div>
      </div>
      <div className={styles.sliderSection}>
        <PhotoSlider SlideCard={ImageSlide} slidesData={projectsImage} />
      </div>
    </div>
  );
};

export default ClothesStorePopup;
