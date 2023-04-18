import { useTranslations } from 'use-intl';
import styles from './NavMenu.module.scss';
import NavMenuItem from '@/UI/menu-items/NavMenuItem/NavMenuItem';
import { useRouter } from 'next/router';

const menuData = [
  {
    id: 'aboutMe',
    textKey: 'navMenu.aboutMe',
  },
  {
    id: 'projects',
    textKey: 'navMenu.projects',
  },
  {
    id: 'skills',
    textKey: 'navMenu.skills',
  },
  {
    id: 'courses',
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
                id={item.id}
                asPath={router.asPath}
                text={t(`${item.textKey}`)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMenu;
