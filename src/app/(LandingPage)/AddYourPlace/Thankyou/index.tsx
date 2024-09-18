'use client';

import styles from './styles.module.css';


function ThankYou() {
  return(
    <div className={styles['container']}>
      <h3>Thank you!</h3>
      <p>Thank you for signing up! We will send you reminders about new opportunities to contribute to the PlacesForBikes City Ratings program and related PeopleForBikes updates.</p>

      <button>OK</button>
    </div>
  );
}


export default ThankYou;
