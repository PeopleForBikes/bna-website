'use client';

import { useState } from 'react';
import Icon from '@Icons';
import styles from './styles.module.css';


function CalculateScore() {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const handleClick = e => {
    e.preventDefault();
    setSelectedTab(e.target.id);
  };

  return (
    <section className={styles['layout']}>

      <h3 className={styles['title']}>How do we calculate bna score</h3>

      <div className={styles['tablist-container']}>
        <ul id="tablist" role="tablist" className={styles['tablist']} aria-orientation="horizontal">
          <li role="presentation">
            <a className={styles['tab']} role="tab" href="#panel1" id="tab1" aria-selected={`${'tab1' === selectedTab}`} aria-controls="panel1" onClick={(e) => handleClick(e)}>
              People
            </a>
          </li>
          <li role="presentation">
            <a className={styles['tab']} role="tab" href="#panel2" id="tab2" aria-selected={`${'tab2' === selectedTab}`} aria-controls="panel2" onClick={(e) => handleClick(e)}>
              Core Service
            </a>
          </li>
          <li role="presentation">
            <a className={styles['tab']} role="tab" href="#panel3" id="tab3" aria-selected={`${'tab3' === selectedTab}`} aria-controls="panel3" onClick={(e) => handleClick(e)}>
              Recreation
            </a>
          </li>
          <li role="presentation">
            <a className={styles['tab']} role="tab" href="#panel4" id="tab4" aria-selected={`${'tab4' === selectedTab}`} aria-controls="panel4" onClick={(e) => handleClick(e)}>
              Opportunity
            </a>
          </li><li role="presentation">
            <a className={styles['tab']} role="tab" href="#panel5" id="tab5" aria-selected={`${'tab5' === selectedTab}`} aria-controls="panel5" onClick={(e) => handleClick(e)}>
              Shopping
            </a>
          </li><li role="presentation">
            <a className={styles['tab']} role="tab" href="#panel6" id="tab6" aria-selected={`${'tab6' === selectedTab}`} aria-controls="panel6" onClick={(e) => handleClick(e)}>
              Transit
            </a>
          </li>
        </ul>
      </div>

      <div className="tabpanel-container content">
        <section id="panel1" role="tabpanel" aria-labelledby="tab1"
          className={'tab1' === selectedTab ? styles['visible'] : styles['hidden']}
          tabIndex={'tab1' === selectedTab ? 0 : -1}
          hidden={'tab1' !== selectedTab}
        >
          <div className={styles['tabpanel-content']}>
            <div className={styles['tabpanel-meta']}>
              <span className={styles['tabpanel-title']}>
                <Icon name="community-care" className={styles['icon']} />
                People
              </span>

              <p className={styles['tabpanel-description']}>Sometimes you want to meet at a friend's house or visit your parents. It is important for bike networks to connect people to each other. Our People measure uses population data from the U.S. Census to determine how well you are connected by bike to the people around you.</p>
            </div>

            <div className={`${styles['tabpanel-image']} ${styles['image-1']}`}></div>
          </div>
        </section>

        <section id="panel2" role="tabpanel" aria-labelledby="tab2"
          className={'tab2' === selectedTab ? styles['visible'] : styles['hidden']}
          tabIndex={'tab2' === selectedTab ? 0 : -1}
          hidden={'tab2' !== selectedTab}
        >
          <div className={styles['tabpanel-content']}>
            <div className={styles['tabpanel-meta']}>
              <span className={styles['tabpanel-title']}>
                <Icon name="objects-column" className={styles['icon']} />
                Core service
              </span>

              <p className={styles['tabpanel-description']}>Core Services are destinations that serve critical needs such as food and health care. Our Core Services measure evaluates your access by bike to doctors, hospitals, and related medical services, along with groceries and social services.</p>
            </div>
            <div className={`${styles['tabpanel-image']} ${styles['image-2']}`}></div>
          </div>
        </section>

        <section id="panel3" role="tabpanel" aria-labelledby="tab3"
          className={'tab3' === selectedTab ? styles['visible'] : styles['hidden']}
          tabIndex={'tab3' === selectedTab ? 0 : -1}
          hidden={'tab3' !== selectedTab}
        >
          <div className={styles['tabpanel-content']}>
            <div className={styles['tabpanel-meta']}>
              <span className={styles['tabpanel-title']}>
                <Icon name="tree" className={styles['icon']} />
                Recreation
              </span>

              <p className={styles['tabpanel-description']}>Our Recreation measure describes how effectively your city connects people to places to get out and play. The score is based on your access to nearby parks and community centers by bike. In addition, we look for off-street bike paths and trails which offer opportunities for people of all experience levels to get out and feel the joy of riding a bike.</p>
            </div>
            <div className={`${styles['tabpanel-image']} ${styles['image-3']}`}></div>
          </div>
        </section>

        <section id="panel4" role="tabpanel" aria-labelledby="tab4"
          className={'tab4' === selectedTab ? styles['visible'] : styles['hidden']}
          tabIndex={'tab4' === selectedTab ? 0 : -1}
          hidden={'tab4' !== selectedTab}
        >
          <div className={styles['tabpanel-content']}>
            <div className={styles['tabpanel-meta']}>
              <span className={styles['tabpanel-title']}>
                <Icon name="school" className={styles['icon']} />
                Opportunity
              </span>

              <p className={styles['tabpanel-description']}>Jobs and education are critical to ensuring that everyone has opportunities to improve their situation. Our Opportunity measure uses job data from the U.S. Census along with locations of K-12 schools, vocational and technical colleges, and institutes of higher education to evaluate how easily you can access these opportunities by bike.</p>
            </div>
            <div className={`${styles['tabpanel-image']} ${styles['image-4']}`}></div>
          </div>
        </section>

        <section id="panel5" role="tabpanel" aria-labelledby="tab5"
          className={'tab5' === selectedTab ? styles['visible'] : styles['hidden']}
          tabIndex={'tab5' === selectedTab ? 0 : -1}
          hidden={'tab5' !== selectedTab}
        >
          <div className={styles['tabpanel-content']}>
            <div className={styles['tabpanel-meta']}>
              <span className={styles['tabpanel-title']}>
                <Icon name="store" className={styles['icon']} />
                Shopping
              </span>

              <p className={styles['tabpanel-description']}>Businesses rely on cities to connect people to them; people need to shop for goods and services. Our Shopping measure finds retail districts near you and scores your city based on how well it connects you to the retail destinations around you by bike.</p>
            </div>
            <div className={`${styles['tabpanel-image']} ${styles['image-5']}`}></div>
          </div>
        </section>

        <section id="panel6" role="tabpanel" aria-labelledby="tab6"
          className={'tab6' === selectedTab ? styles['visible'] : styles['hidden']}
          tabIndex={'tab6' === selectedTab ? 0 : -1}
          hidden={'tab6' !== selectedTab}
        >
          <div className={styles['tabpanel-content']}>
            <div className={styles['tabpanel-meta']}>
              <span className={styles['tabpanel-title']}>
                <Icon name="train-subway" className={styles['icon']} />
                Transit
              </span>

              <p className={styles['tabpanel-description']}>Public transportation is an excellent way to include the bike on longer trips. Combining the bike and bus, subway, streetcar, light rail, or commuter rail is a win-win: you enjoy the benefits of active transportation while gaining access to a broader area of opportunities, goods, and services. Our Transit measure reflects how well your rail stations and major transit hubs connect to the people around them.</p>
            </div>
            <div className={`${styles['tabpanel-image']} ${styles['image-6']}`}></div>
          </div>
        </section>
      </div>

    </section>
  );
}


export default CalculateScore;
