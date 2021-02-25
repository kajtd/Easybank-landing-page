import React from 'react';
import styles from './WhyUs.module.scss';
import { whyUsIcons } from '../../data/whyUsIcons';
import Bounce from 'react-reveal/Bounce';


const WhyUs = () => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <h2 className={styles.title}>
                    Why choose Easybank?
                </h2>
                <p className={styles.description}>
                    We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </p>
            </div>
            <ul className={styles.menu}>
                {whyUsIcons.map(item => (
                    <Bounce left key={item.title}>
                        <li className={styles.reason}>
                            <img className={styles["reason-icon"]} src={item.image} alt="icon"/>
                            <h3 className={styles["reason-title"]}>{item.title}</h3>
                            <p className={styles["reason-description"]}>{item.description}</p>
                        </li>
                    </Bounce>
                ))}
                </ul>
        </div>
    );
};

export default WhyUs;
