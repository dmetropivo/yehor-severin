import SVGButton from '@/UI/buttons/SVGButton/SVGButton';
import styles from './MobileMenu.module.scss';
import Link from 'next/link';
import BehanceIcon from '../../../../public/svg/behanceIcon.svg';
import DribbleIcon from '../../../../public/svg/dribble.svg';
import TelegramIcon from '../../../../public/svg/telegram.svg';
import LinkedIn from '../../../../public/svg/linkedIn.svg';
import { useEffect, useState } from 'react';

const MobileMenu = () => {
  const [isClosed, setIsClosed] = useState(true);

  useEffect(() => {
    document.addEventListener('click', (event) => {
      const target = event.target;
      const isOpen = document.getElementById('menuList');
      console.log(target.classList.contains('menuTarget'));
      console.log(isOpen.classList);

      if (
        isOpen.classList.contains('isOpen') &&
        !target.classList.contains('menuTarget')
      ) {
        setIsClosed(true);
      } else if (
        isOpen.classList.contains('isOpen') &&
        target.classList.contains('menuTarget')
      ) {
        setIsClosed(true);
      } else if (target.classList.contains('menuTarget')) {
        setIsClosed(false);
      }
    });
  }, []);

  // const handleOpenMenu = () => {
  //   // const menuList = document.querySelector("html");
  //   setIsClosed(!isClosed);
  // };
  return (
    <div className={styles.mobileMenu}>
      <SVGButton>
        <svg
          className={'menuTarget'}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={'menuTarget'}
            d="M15.9999 21.3333C16.7072 21.3333 17.3854 21.6143 17.8855 22.1144C18.3856 22.6145 18.6666 23.2927 18.6666 24C18.6666 24.7072 18.3856 25.3855 17.8855 25.8856C17.3854 26.3857 16.7072 26.6666 15.9999 26.6666C15.2927 26.6666 14.6144 26.3857 14.1143 25.8856C13.6142 25.3855 13.3333 24.7072 13.3333 24C13.3333 23.2927 13.6142 22.6145 14.1143 22.1144C14.6144 21.6143 15.2927 21.3333 15.9999 21.3333ZM15.9999 13.3333C16.7072 13.3333 17.3854 13.6143 17.8855 14.1144C18.3856 14.6145 18.6666 15.2927 18.6666 16C18.6666 16.7072 18.3856 17.3855 17.8855 17.8856C17.3854 18.3857 16.7072 18.6666 15.9999 18.6666C15.2927 18.6666 14.6144 18.3857 14.1143 17.8856C13.6142 17.3855 13.3333 16.7072 13.3333 16C13.3333 15.2927 13.6142 14.6145 14.1143 14.1144C14.6144 13.6143 15.2927 13.3333 15.9999 13.3333ZM15.9999 5.33331C16.7072 5.33331 17.3854 5.61426 17.8855 6.11436C18.3856 6.61446 18.6666 7.29274 18.6666 7.99998C18.6666 8.70722 18.3856 9.3855 17.8855 9.8856C17.3854 10.3857 16.7072 10.6666 15.9999 10.6666C15.2927 10.6666 14.6144 10.3857 14.1143 9.8856C13.6142 9.3855 13.3333 8.70722 13.3333 7.99998C13.3333 7.29274 13.6142 6.61446 14.1143 6.11436C14.6144 5.61426 15.2927 5.33331 15.9999 5.33331Z"
            fill="#9747FF"
          />
        </svg>
      </SVGButton>
      <div
        id={'menuList'}
        className={`${!isClosed ? 'isOpen' : ''} ${styles.menuList} ${
          !isClosed ? styles.opened : styles.closed
        }`}
      >
        <Link
          passHref
          target={'_blank'}
          href={'https://www.behance.net/bf525e73/projects'}
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

export default MobileMenu;
