import React from 'react';
import styles from './Intro.module.scss';
import Button from './../Button/Button';

const Intro = () => {
    return(
        <div className={styles.backgroundImage}>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Next generation<br/>digital banking
                    </h1>
                    <p className={styles.description}>
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </p>
                    <Button>Request Invite</Button>
                </div>
                <div className={styles.phoneImg}> </div>
            </div>
        </div>
    );
};

export default Intro;