import React from 'react';

import Hero from './Hero';
import TopPlaces from './TopPlaces';
import AddYourPlace from './AddYourPlace';
import CalculateScore from './CalculateScore';
import Explore from './Explore';
import { Footer } from '@Components';

import LandingPageIcons from '@Components/Sprites';
import Header from '@Components/Header';


function LandingPage() {
  return (
    <>
      <div style={{ display: "none" }}>
        <LandingPageIcons />
      </div>

      <main className="main-layout page-layout">
        <Header />

        <Hero />
        <TopPlaces />
        <AddYourPlace />
        <CalculateScore />
        <Explore />
        <Footer />
      </main>
    </>
  );
}


export default LandingPage;
