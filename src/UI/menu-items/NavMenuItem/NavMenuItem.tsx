import styles from './NavMenuItem.module.scss';
import { FC } from 'react';
import { Link as LinkScroll } from 'react-scroll';

interface INavMenuItem {
  id?: string;
  text?: string;
  asPath?: string;
}

const NavMenuItem: FC<INavMenuItem> = ({ id = 'aboutMe', text, asPath }) => {
  // const [isActive, setIsActive] = useState(false);
  // useEffect(() => {
  //   setIsActive(asPath === href);
  // }, [asPath]);
  return (
    <LinkScroll
      activeClass={styles.active}
      to={`${id}`}
      spy
      smooth
      duration={500}
    >
      <button className={`${styles.navMenuItem}`}>
        <div className={`${styles.activeIndicator}`}></div>
        <span>{text}</span>
      </button>
    </LinkScroll>
  );
};

export default NavMenuItem;
