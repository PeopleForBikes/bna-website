import Image from 'next/image';
import Link from 'next/link';

import logo from '@Images/bna-logo-horizontal-2021.png'
import styles from './styles.module.css';


function Header() {
  return (
    <header className={styles.header}>
      <nav aria-labelledby="primary-navigation">

        <div className={styles.navLeft}>
          <Link href="/">
            <Image src={logo} alt="bna logo" height="40" />
          </Link>
        </div>

        <div className={styles.navRight}>
          <ul id="primary-navigation">
            <li><Link href="/locations">ALL LOCATIONS</Link></li>
            <li><Link href="/about/methodology">METHODOLOGY</Link></li>
            <li><Link href="https://cityratings.peopleforbikes.org">CITY RATINGS</Link></li>
            <li><Link href="https://www.peopleforbikes.org">PEOPLEFORBIKES</Link></li>
          </ul>
        </div>
      </nav>

    </header>
  );
}


export default Header;
