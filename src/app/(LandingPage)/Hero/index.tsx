import React from 'react';

import Header from '@Components/Header';

import FormSearch from './FormSearch';
import styles from './styles.module.css';


function Hero() {
  return (
    <section className={styles['hero']}>

      <div className={styles['gradient']}>

        <div className={styles['container']}>
          <h2 className={styles['title']}>Bike network:<br/>Connecting people to their destinations</h2>

          <FormSearch />
        </div>
      </div>


    </section>
  );
}


export default Hero;
