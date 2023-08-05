import Link from 'next/link';
import Image from 'next/image';

// import FooterLogo from '@Images/people-for-bikes-logo.svg';
import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles['footer']}>

      <Link href="https://www.peopleforbikes.org">
        <svg><use
            href="#logo-bna-light"
            width={178}
            height={43}
          />
        </svg>
      </Link>

      <nav aria-labelledby="footer-navigation">
        <ul id="footer-navigation">
          <li><Link href="/locations">All Locations</Link></li>
          <li><Link href="/about/methodology">Methodology</Link></li>
          <li><Link href="/login">Sign In</Link></li>
          <li><Link href="https://www.peopleforbikes.org/placesforbikes/pages/bicycle-network-analysis">How can I get a BNA for my place?</Link></li>
          <li><Link href="https://www.peopleforbikes.org">PeopleForBikes</Link></li>
        </ul>
      </nav>
    </footer>
  );
}


export default Footer;
