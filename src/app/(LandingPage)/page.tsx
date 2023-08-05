import React from 'react';

import Hero from './Hero';
import TopPlaces from './TopPlaces';
import AddYourPlace from './AddYourPlace';
import CalculateScore from './CalculateScore';

import LandingPageIcons from '@/components/Icons';


function LandingPage() {
  return (
    <>
      <div style={{ display: "none" }}>
        <LandingPageIcons />
      </div>

      <main className="main-layout page-layout">
        <Hero />
        <TopPlaces />
        <AddYourPlace />
        <CalculateScore />
      </main>
    </>
  );
}


export default LandingPage;
