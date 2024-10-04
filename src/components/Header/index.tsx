'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';

import Icon from '@Icons';
import MobilePrimaryNavigation from './MobilePrimaryNavigation';
import PrimaryNavigation from './PrimaryNavigation';
import styles from './styles.module.css';


function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const memoizedSetMenuIsOpen = useCallback(() => {
    setMenuIsOpen(prevState => !prevState);
  }, []);

  return (
    <header className={styles['header']}>
      <div className={styles['wrapper']}>
        <Link href="/">
          <Icon name='logo-bna-light' />
        </Link>

        <PrimaryNavigation className={styles['primary-nav']} />

        <div
          className={styles['toggle-menu']}
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <Icon name="bars" />
        </div>
      </div>

      <MobilePrimaryNavigation
        className={styles['mobile-nav']}
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={memoizedSetMenuIsOpen}
      />
    </header>
  );
}


export default Header;
