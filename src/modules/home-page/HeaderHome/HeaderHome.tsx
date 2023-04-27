import styles from './HeaderHome.module.scss';
import Image from 'next/image';
import Button from '@/UI/buttons/Button/Button';
import SVGButton from '@/UI/buttons/SVGButton/SVGButton';
import BehanceIcon from 'public/svg/behanceIcon.svg';
import TelegramIcon from 'public/svg/telegram.svg';
import DribbleIcon from 'public/svg/dribble.svg';
import LinkedIn from 'public/svg/linkedIn.svg';
import Link from 'next/link';
import MobileMenu from '@/UI/buttons/MobileMenu/MobileMenu';
import useMediaQuery from '@/hooks/useMediaQuery';

const HeaderHome = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
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
        <div className={styles.desktopContactMe}>
          <Link href="mailto:yehorseverin@gmail.com" passHref>
            <Button text={'Contact me'} variant={'primary'} />
          </Link>
        </div>
        {isMobile ? <MobileMenu /> : <></>}
      </div>
      <div className={styles.separateLine} />
      <div className={styles.contactMeMobile}>
        <Button text={'Contact me'} variant={'primary'} />
      </div>
      <div className={styles.socialsContainer}>
        <Link
          href={'https://www.behance.net/bf525e73/projects'}
          passHref
          target={'_blank'}
        >
          <SVGButton>
            <BehanceIcon />
          </SVGButton>
        </Link>
        <Link href={'https://dribbble.com/jaga00'} passHref target={'_blank'}>
          <SVGButton>
            <DribbleIcon />
          </SVGButton>
        </Link>
        <Link href={'https://t.me/jaga00000'} passHref target={'_blank'}>
          <SVGButton>
            <TelegramIcon />
          </SVGButton>
        </Link>
        <Link
          href={'https://www.linkedin.com/in/yehor-severin-89a4561aa'}
          passHref
          target={'_blank'}
        >
          <SVGButton>
            <LinkedIn />
          </SVGButton>
        </Link>
      </div>
    </div>
  );
};

export default HeaderHome;
