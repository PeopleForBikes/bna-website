'use client';

import Image from 'next/image';
import img1 from '@Images/add-place-img-1.png';
import img2 from '@Images/add-place-img-2.png';
import img3 from '@Images/add-place-img-3.png';

import Form from './form';
import styles from './styles.module.css';


function AddYourPlace() {
  return (
    <section className={styles['layout']}>

      <h3 className={styles['title']}>Add Your Place</h3>
      <h1 className={styles['sub-title']}>2248 Places In 12 countries</h1>

      <div className={styles['container']}>
        <ul className={styles['images']}>
          <li className={styles['']}>
            <Image
              src={img1.src}
              alt='picture of bicyclist'
              width={img1.width}
              height={img1.height}
              // sizes="100vw"
              className={styles['image']}
            />
          </li>
          <li className={styles['']}>
            <Image
              src={img2.src}
              alt='picture of bicyclist'
              width={img2.width}
              height={img2.height}
              // sizes="100vw"
              className={styles['image']}
            />
          </li>
          <li className={styles['']}>
            <Image
              src={img3.src}
              alt='picture of bicyclist'
              width={img3.width}
              height={img3.height}
              // sizes="100vw"
              className={styles['image']}
            />
          </li>
        </ul>

        <div className={styles['form-box']}>
          <p className={styles['description']}>PeopleForBikes' City Ratings program acknowledges cities improving their bike networks. If your city is not listed in our recent rankings, please complete the form to have your city included in our Bicycle Network Analysis and next year's City Ratings.</p>
          <Form />
        </div>
      </div>


    </section>
  );
}


export default AddYourPlace;
