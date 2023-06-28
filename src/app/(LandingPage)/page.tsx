import Image from 'next/image';
import Link from 'next/link';
import { Calculator } from "@vectopus/atlas-icons-react";

import logo from '@Images/logo-bna-full-1015×596.png';

import styles from './styles.module.css';


function Home() {
  return (
    <main className={styles.layout}>
      <section className={styles.hero}>
        <h2>People For Bikes</h2>
        <Image
          src={logo}
          alt='BNA Logo'
        />
      </section>

      <section className="location-stats">
        <h2>Leading Cities/Towns</h2>
      </section>

      <section className="my-location">
        <h2>Is your location on the map?</h2>
      </section>

      <section className={styles.bnaCalculation}>
        <h2 className="borderBottomDecor">
          <Calculator size={28} />
          How the BNA Score is calculated
        </h2>

        <div className={styles.card}>
          <h3>People</h3>
          <p>Sometimes you want to meet at a friend's house or visit your parents. It is important for bike networks to connect people to each other. Our People measure uses population data from the U.S. Census to determine how well you are connected by bike to the people around you.</p>
        </div>

        <div className={styles.card}>
          <h3>Opportunity</h3>
          <p>Jobs and education are critical to ensuring that everyone has opportunities to improve their situation. Our Opportunity measure uses job data from the U.S. Census along with locations of K-12 schools, vocational and technical colleges, and institutes of higher education to evaluate how easily you can access these opportunities by bike.</p>
        </div>

        <div className={styles.card}>
          <h3>Core Services</h3>
          <p>Core Services are destinations that serve critical needs such as food and health care. Our Core Services measure evaluates your access by bike to doctors, hospitals, and related medical services, along with groceries and social services.</p>
        </div>

        <div className={styles.card}>
          <h3>Shopping</h3>
          <p>Businesses rely on cities to connect people to them; people need to shop for goods and services. Our Shopping measure finds retail districts near you and scores your city based on how well it connects you to the retail destinations around you by bike.</p>
        </div>

        <div className={styles.card}>
          <h3>Recreation</h3>
          <p>Our Recreation measure describes how effectively your city connects people to places to get out and play. The score is based on your access to nearby parks and community centers by bike. In addition, we look for off-street bike paths and trails which offer opportunities for people of all experience levels to get out and feel the joy of riding a bike.</p>
        </div>

        <div className={styles.card}>
          <h3>Transit</h3>
          <p>Public transportation is an excellent way to include the bike on longer trips. Combining the bike and bus, subway, streetcar, light rail, or commuter rail is a win-win: you enjoy the benefits of active transportation while gaining access to a broader area of opportunities, goods, and services. Our Transit measure reflects how well your rail stations and major transit hubs connect to the people around them.</p>
        </div>

        <footer className="borderBottomDecor">
          <p>
            Our process is described in more detail, including a full technical summary,
            <Link href="https://cityratings.peopleforbikes.org/about/methodology"> here</Link>
          </p>
        </footer>
      </section>
    </main>
  );
}


export default Home;
