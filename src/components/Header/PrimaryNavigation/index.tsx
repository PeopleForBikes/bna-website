import React from 'react';
import Link from 'next/link';

import styles from './styles.module.css';


function PrimaryNavigation({ menuIsOpen }) {
  return (
    <nav aria-labelledby="primary-navigation" className={styles['nav']}
      style={{ transform: `${menuIsOpen ? 'translateY(0)' : 'translateY(-663px)'}`}}
      >
      <ul id="primary-navigation">
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


export default PrimaryNavigation;
