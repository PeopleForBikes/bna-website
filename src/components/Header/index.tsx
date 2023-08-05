'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Icons from '@Icons';
import PrimaryNavigation from './PrimaryNavigation';

import styles from './styles.module.css';


function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles['header']}>
      <div className={styles['navLeft']}>
        <Link href="/">
          <svg><use
              href="#logo-bna-light"
              width={178}
              height={43}
            />
          </svg>
        </Link>

        <div className={styles['toggle-menu']} onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {menuIsOpen
            ? <svg className={styles['svg-xmark']}><use href="#xmark" /></svg>
            : <svg className={styles['svg-bars']}><use href="#bars" /></svg>
          }
        </div>
      </div>

      <PrimaryNavigation menuIsOpen={menuIsOpen} />

    </header>
  );
}


export default Header;
