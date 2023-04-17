import styles from './HeaderHome.module.scss';
import Image from 'next/image';
import Button from '@/UI/buttons/Button/Button';
import SVGButton from '@/UI/buttons/SVGButton/SVGButton';
import BehanceIcon from 'public/svg/behanceIcon.svg';
import TelegramIcon from 'public/svg/telegram.svg';
import DribbleIcon from 'public/svg/dribble.svg';
import LinkedIn from 'public/svg/linkedIn.svg';

const HeaderHome = () => {
  return (
    <div className={styles.headerHome}>
      <div className={styles.topSection}>
        <div className={styles.avatarSection}>
          <Image
            width={336}
            height={336}
            src={'/images/Avatar.png'}
            alt={'Yehor Severin'}
          />
          <div>
            <p>Yehor Severin</p>
            <p>UI/UX Designer in Kyiv</p>
          </div>
        </div>
        <div className={styles.buttonSection}>
          <Button text={'Contact me'} variant={'primary'} />
        </div>
      </div>
      <div className={styles.separateLine} />
      <div className={styles.socialsContainer}>
        <SVGButton>
          <BehanceIcon />
        </SVGButton>
        <SVGButton>
          <DribbleIcon />
        </SVGButton>
        <SVGButton>
          <TelegramIcon />
        </SVGButton>
        <SVGButton>
          <LinkedIn />
        </SVGButton>
      </div>
    </div>
  );
};

export default HeaderHome;
