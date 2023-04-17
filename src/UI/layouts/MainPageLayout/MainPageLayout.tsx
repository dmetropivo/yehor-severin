import NavMenu from '@/UI/menus/NavMenu/NavMenu';
import styles from './MainPageLayout.module.scss';
import { FC, ReactNode } from 'react';

interface IMainPageLayout {
  children: ReactNode;
}

const MainPageLayout: FC<IMainPageLayout> = ({ children }) => {
  return (
    <div className={'mainPageLayout'}>
      <main className={`${styles.main} container`}>
        <NavMenu />
        <div className={styles.contentSide}>{children}</div>
      </main>
      <div className={'footer container'}>FOOTER</div>
    </div>
  );
};

export default MainPageLayout;
