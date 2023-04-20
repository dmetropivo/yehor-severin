import styles from './Footer.module.scss';
import SVGButton from '@/UI/buttons/SVGButton/SVGButton';
import BehanceIcon from '../../../../public/svg/behanceIcon.svg';
import DribbleIcon from '../../../../public/svg/dribble.svg';
import TelegramIcon from '../../../../public/svg/telegram.svg';
import LinkedIn from '../../../../public/svg/linkedIn.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.contactSection}>
        <a href="tel:+3800985783179">+380 (098) 578 31 79</a>
        <a href="mailto:yehorseverin@gmail.com">yehorseverin@gmail.com</a>
        <a href="mailto:jagaur@ukr.net">jagaur@ukr.net</a>
      </div>
      <div className={styles.socialsContainer}>
        <Link href={'https://www.behance.net/bf525e73/projects'}>
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

export default Footer;
