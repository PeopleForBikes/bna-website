import React from 'react';

import Header from '@Components/Header';

import FormSearch from './FormSearch';
import styles from './styles.module.css';


function Hero() {
  return (
    <section className={styles['hero']}>
      <div className={styles['wrapper']}>
        <Header />

        <aside className={styles['search']}>
          <div className={styles['container']}>
            <h2 className={styles['title']}>Bike network:<br/>Connecting people to their destinations</h2>

            <FormSearch />
          </div>
        </aside>

      </div>
    </section>
  );
}


export default Hero;
