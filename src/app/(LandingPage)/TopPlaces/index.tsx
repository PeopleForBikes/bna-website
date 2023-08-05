import Link from 'next/link';
import React from 'react';

import styles from './styles.module.css';


function TopPlaces() {
  return (
    <section className={styles['layout']}>
      <h3 className={styles['title']}>Top Places</h3>

      <ul className={styles['']}>
        <li className={styles['']}></li>
      </ul>

      <Link href="/location">
        More places
        <svg> <use href="#bars" /></svg>
      </Link>
    </section>
  );
}


export default TopPlaces;
