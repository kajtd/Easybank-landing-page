import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, nav }) => {
    return (
            <button className={nav ? `${styles.button} ${styles["nav-button"]}` : styles.button}>
                {children}
            </button>
    )
};

export default Button;