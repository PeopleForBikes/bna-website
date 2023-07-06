'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@Images/logo-bna-light.svg';
import Icons from '@Icons';
import PrimaryNavigation from './PrimaryNavigation';

import styles from './styles.module.css';


function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className={styles.header}>

      <div className={styles.navLeft}>
        <Link href="/">
          <Image
            src={logo}
            width={178}
            height={43}
            alt="BNA Logo"
          />
        </Link>

        <div className={styles['toggle-menu']} onClick={() => setMenuIsOpen(!menuIsOpen)}>
          {menuIsOpen
            ? <Icons name='xmark' className={styles.xmark} />
            : <Icons name='bars' className={styles.bars} color='var(--white)' />
          }
        </div>
      </div>

      <PrimaryNavigation menuIsOpen={menuIsOpen} />

    </header>
  );
}


export default Header;
