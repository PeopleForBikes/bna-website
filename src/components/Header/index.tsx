'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import Icon from '@Icons';
import PrimaryNavigation from './PrimaryNavigation';

import styles from './styles.module.css';


function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles['header']}>
      <div className={styles['navLeft']}>
        <Link href="/">
          <Icon name='logo-bna-light' />
        </Link>

        <div className={styles['toggle-menu']} onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {menuIsOpen
            ? <Icon name="xmark" />
            : <Icon name="bars" />
          }
        </div>
      </div>

      <PrimaryNavigation menuIsOpen={menuIsOpen} />

    </header>
  );
}


export default Header;
