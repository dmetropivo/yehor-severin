import styles from './NavMenuItem.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavMenuItem = ({ href, text, asPath }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(asPath === href);
  }, [asPath]);
  return (
    <Link
      className={`${styles.navMenuItem} ${isActive ? styles.active : ''}`}
      href={href}
      passHref
      legacyBehavior={false}
    >
      <div className={`${styles.activeIndicator}`}></div>
      <span>{text}</span>
    </Link>
  );
};

export default NavMenuItem;
