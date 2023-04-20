import NavMenu from '@/UI/menus/NavMenu/NavMenu';
import styles from './MainPageLayout.module.scss';
import { FC, ReactNode } from 'react';
import Footer from '@/UI/footer/Footer/Footer';

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
      <div className={'container'}>
        <Footer />
      </div>
    </div>
  );
};

export default MainPageLayout;
