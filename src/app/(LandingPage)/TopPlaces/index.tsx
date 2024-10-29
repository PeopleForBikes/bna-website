import Link from 'next/link';

import sql from '@Utils/postgres';

import Icon from '@Icons';
import styles from './styles.module.css';


async function getTopPlaces() {
  let data;
  try {
    data = await sql`
      WITH latest_scores AS (
        SELECT
          s.city_id,
          s.score,
          s.created_at,
          ROW_NUMBER() OVER (
            PARTITION BY s.city_id ORDER BY s.created_at DESC
          ) AS rn
        FROM
          public.summary AS s
      )
      SELECT
        c.name AS city_name,
        c.state_abbrev,
        c.country,
        ls.score
      FROM
        latest_scores AS ls
        JOIN public.city AS c
          ON c.id = ls.city_id
      WHERE
        ls.rn = 1
      ORDER BY
        ls.score DESC
      LIMIT 10;
    `;

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function TopPlaces() {
  const topPlaces = await getTopPlaces();
  let topFivePlaces: any[] = [];
  let bottomFivePlaces: any[] = [];

  if (topPlaces.length > 0) {
    topFivePlaces = topPlaces.slice(0, 5);
    bottomFivePlaces = topPlaces.slice(5, 10);
  }

  return (
    <section className={styles['layout']}>
      <h3 className={styles['title']}>Top 10 Places</h3>

      <div className={styles['list-container']}>
        <ul className={styles['list']}>
          {topFivePlaces.map((place) => (
            <li className={styles['item']} key={place.city_name}>
              <h3>{place.city_name}</h3>
              <span>{`${place.state_abbrev}, ${place.country}`}</span>
              <h1>{place.score}</h1>
            </li>
          ))}
        </ul>
        <ul className={styles['list']}>
          {bottomFivePlaces.map((place) => (
            <li className={styles['item']} key={place.city_name}>
              <h3>{place.city_name}</h3>
              <span>{`${place.state_abbrev}, ${place.country}`}</span>
              <h1>{place.score}</h1>
            </li>
          ))}
        </ul>
      </div>

      <Link className={`btn-secondary ${styles['btn-link']}`} href="https://bna.peopleforbikes.org/#/places////">
        More Places
        <Icon name="arrow-right" className={styles['icon-arrow-right']} />
      </Link>
    </section>
  );
}


export default TopPlaces;
