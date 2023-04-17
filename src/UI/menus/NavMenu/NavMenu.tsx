import { useTranslations } from 'use-intl';
import Link from 'next/link';
import styles from './NavMenu.module.scss';
import NavMenuItem from '@/UI/menu-items/NavMenuItem/NavMenuItem';
import { useRouter } from 'next/router';

const menuData = [
  {
    link: '/#about-me',
    textKey: 'navMenu.aboutMe',
  },
  {
    link: '/#projects',
    textKey: 'navMenu.projects',
  },
  {
    link: '/#skills',
    textKey: 'navMenu.skills',
  },
  {
    link: '/#courses',
    textKey: 'navMenu.courses',
  },
];

const NavMenu = () => {
  const router = useRouter();
  const t = useTranslations('Common');

  return (
    <div className={styles.navMenuContainer}>
      <ul>
        {menuData.map((item, index) => {
          return (
            <li key={index}>
              <NavMenuItem
                asPath={router.asPath}
                text={t(`${item.textKey}`)}
                href={item.link}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
