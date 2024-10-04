'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@Icons';
import styles from './styles.module.css';

function MobilePrimaryNavigation({ className='', menuIsOpen, setMenuIsOpen }: { className: string, menuIsOpen: boolean, setMenuIsOpen: (menuIsOpen: boolean) => void }) {
  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  return (
    <nav
      aria-labelledby="mobile-primary-navigation"
      className={`${styles['nav']} ${className}`}
      style={{ transform: `${menuIsOpen ? 'translateY(0)' : 'translateY(-495px)'}` }}
    >
      <div
        className={styles['close-menu']}
        onClick={handleClick}
      >
        <Image
          src="/images/logo-bna-dark-text.png"
          alt="BNA Logo"
          width={178}
          height={43} />
        <Icon name="xmark" />
      </div>

      <ul className={styles['nav-list']}>
        <li className={styles['nav-item']}>
          <Link href="/locations">Search places</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="https://cityratings.peopleforbikes.org/about/methodology">How it works</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="http://cityratings.peopleforbikes.org">City Ratings</Link>
        </li>
        <li className={styles['nav-item']}>
          <Link href="https://www.peopleforbikes.org">PeopleForBikes</Link>
        </li>
      </ul>

      <button
        type="button"
        className={`btn ${styles['btn-donate']}`}
        onClick={() => console.log('Dontate Button')}
      >
        Donate
      </button>
    </nav>
  );
}


export default MobilePrimaryNavigation;
