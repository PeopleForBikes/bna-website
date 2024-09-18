import Link from 'next/link';

import Icon from '@Icons';
import styles from './styles.module.css';


function TopPlaces() {
  return (
    <section className={styles['layout']}>
      <h3 className={styles['title']}>Top Places</h3>

      <ul className={styles['']}>
        <li className={styles['']}></li>
      </ul>

      <Link className={`btn-secondary ${styles['btn-link']}`} href="/location">
        More places

        <Icon name="arrow-right" className={styles['icon-arrow-right']} />
      </Link>
    </section>
  );
}


export default TopPlaces;
