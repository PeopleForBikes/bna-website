import Link from 'next/link';
import Image from 'next/image';
import FooterLogo from '@Images/people-for-bikes-logo.svg';

import styles from './styles.module.css';


function Footer() {
  return (
    <footer className={styles.footer}>

      <Link href="https://www.peopleforbikes.org">
        <Image src={FooterLogo} alt="bna logo" height="40" />
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
