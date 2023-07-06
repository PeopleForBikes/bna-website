import React from 'react';

import Hero from './Hero';
import TopPlaces from './TopPlaces';
import AddYourPlace from './AddYourPlace';
import CalculateScore from './CalculateScore';

import styles from './styles.module.css';


function Home() {
  return (
    <main className="main-layout page-layout">
      <Hero />
      <TopPlaces />
      <AddYourPlace />
      <CalculateScore />
    </main>
  );
}


export default Home;
