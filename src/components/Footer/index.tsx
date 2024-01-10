import Link from 'next/link';
import Icon from '@Icons';

import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles['footer']}>

      <header>
        <Link href="https://www.peopleforbikes.org" >
          <Icon name='logo-bna-light' className={styles['icon-logo-bna-light']} />
        </Link>

        <nav className={styles['nav']} aria-labelledby="footer-nav-list">
          <ul id="footer-nav-list">
            <li><Link href="/locations">Search Places</Link></li>
            <li><Link href="https://cityratings.peopleforbikes.org">City Ratings</Link></li>
            <li><Link href="https://www.peopleforbikes.org">PeopleForBikes</Link></li>
            <li>
              <Link className={`${styles['btn-link']} btn-donate`} href="/">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className={styles['contact-info']}>
        <div className={styles['contactus']}>
          <p>Contact us:</p>

          <address className={styles['addresses']}>
            <ul>
              <li>
                <Icon name="circle-phone" className={styles['icon-circle-phone']} />
                <a href="tel:303-449-4893">303-449-4893</a>
              </li>
              <li>
                <Icon name="envelope" className={styles['icon-envelope']} />
                <a href="mailto:info@peopleforbikes.org">info@peopleforbikes.org</a>
              </li>
              <li>
                <Icon name="location-dot" className={styles['icon-location-dot']} />
                <span>P.O. Box 2359, Boulder, CO 80306</span>
              </li>
            </ul>
          </address>
        </div>

        <div className={styles['social-media']}>
          <div>
            <ul className={styles['col-1']}>
              <li>
                <Link href="https://www.facebook.com/PeopleForBikes" target="_blank" rel="noreferrer">
                  <Icon name="facebook" className="w-25 h-24" />
                  <span>Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/user/peopleforbikes/videos" target="_blank" rel="noreferrer">
                  <Icon name="youtube" style={{width: '25px', height: '17px'}} />
                  <span>Youtube</span>
                </Link>
              </li>
            </ul>
            <ul className={styles['col-2']}>
              <li>
                <Link href="https://www.youtube.com/user/peopleforbikes/videos" target="_blank" rel="noreferrer">
                  <Icon name="linkedin" style={{width: '25px', height: '24px'}} />
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/peopleforbikes" target="_blank" rel="noreferrer">
                  <Icon name="x-twitter" style={{width: '25px', height: '24px'}} />
                  <span>Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/peopleforbikes" target="_blank" rel="noreferrer">
                  <Icon name="instagram" style={{width: '25px', height: '24px'}} />
                  <span>Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className={styles['all-rights']}>
        <p>
          <span>PeopleForBikes</span>
          <span>&copy;Copyright 2023</span>
        </p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}


export default Footer;
