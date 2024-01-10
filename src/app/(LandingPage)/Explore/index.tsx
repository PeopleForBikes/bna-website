import Image from 'next/image';
import Link from 'next/link';

import oneRide from '@Images/one-ride.png';
import cityRatings from '@Images/city-ratings.png';
import keepRiding from '@Images/keep-riding.png';
import rideSpot from '@Images/ride-spot.png';
import employer from '@Images/employer.png';
import anti from '@Images/anti.png';
import bna from '@Images/bna.png';
import covid from '@Images/covid.png';

import styles from './styles.module.css';


function Explore() {
  return (
    <section className={styles['layout']}>
      <h3 className={styles['title']}>Explore our Network of Sites</h3>

      <ul className={styles['image-list']}>
        <li>
          <Link href="https://oneride.peopleforbikes.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={oneRide.src}
                width={oneRide.width}
                height={oneRide.height}
                alt="hipster bike rider"
              />
              <p className={styles['image-title']}>One Ride</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="http://cityratings.peopleforbikes.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={cityRatings.src}
                width={cityRatings.width}
                height={cityRatings.height}
                alt="bicyclists in the foggy city"
              />
              <p className={styles['image-title']}>City Ratings</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://www.pfbkeepriding.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={keepRiding.src}
                width={keepRiding.width}
                height={keepRiding.height}
                alt="closeup of bicycle tires"
              />
              <p className={styles['image-title']}>Keep Riding</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://www.ridespot.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={rideSpot.src}
                width={rideSpot.width}
                height={rideSpot.height}
                alt="bicyclist riding in the mountain side"
              />
              <p className={styles['image-title']}>Ride Spot</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://infrastructure.peopleforbikes.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={employer.src}
                width={employer.width}
                height={employer.height}
                alt="person with business suit riding a bike"
              />
              <p className={styles['image-title']}>Employer Bike Program</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://www.peopleforbikes.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={anti.src}
                width={anti.width}
                height={anti.height}
                alt="empty autumn road"
              />
              <p className={styles['image-title']}>Anti-bias, anti-racism</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://bna.peopleforbikes.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={bna.src}
                width={bna.width}
                height={bna.height}
                alt="picture of foot on bicycle pedal"
              />
              <p className={styles['image-title']}>Bicycle network analysis</p>
            </div>
          </Link>
        </li>
        <li>
          <Link href="https://oneride.peopleforbikes.org" target='_blank' rel='noreferrer'>
            <div className={styles['image-box']}>
              <Image
                src={covid.src}
                width={covid.width}
                height={covid.height}
                alt="picture of bicyclist wearing covid mask"
              />
              <p className={styles['image-title']}>Covid resources</p>
            </div>
          </Link>
        </li>

      </ul>
    </section>
  );
}


export default Explore;
