import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";
import Button from './../Button/Button';
import logo from './../../images/logo.svg';

const Navbar = () => {
    const [hamburgerActive, isHamburgerActive] = useState(false);
    const [navbarActive, isNavbarActive] = useState(false);

    return (
        <Router>
            <nav className={styles.nav}>
                <NavLink
                    to="/"
                    className={styles.logo}
                >
                    <img src={logo} alt="logo" />
                </NavLink>
                <button
                    onClick={() => {
                        if (hamburgerActive) isHamburgerActive(false);
                        else isHamburgerActive(true);
                        if (navbarActive) isNavbarActive(false);
                        else isNavbarActive(true);
                        // this.setAttribute('aria-expanded', hamburgerActive);
                    }}
                    className={hamburgerActive ? `${styles.hamburger} ${styles["hamburger-active"]}` : styles.hamburger}
                    aria-expanded="false"
                >
                    <span className={styles["hamburger-box"]}>
                        <span className={styles["hamburger-inner"]}></span>
                    </span>
                </button>
                <ul className={navbarActive ? `${styles.navbar} ${styles["navbar-active"]}` : styles.navbar}>
                    <li className={styles["navbar-item"]}>
                        <NavLink
                            to="/"
                            className={styles["navbar-link"]}
                        >
                            Home
                    </NavLink>
                    </li>
                    <li className={styles["navbar-item"]}>
                        <NavLink
                            to="/"
                            className={styles["navbar-link"]}
                        >
                            About
                    </NavLink>
                    </li>
                    <li className={styles["navbar-item"]}>
                        <NavLink
                            to="/"
                            className={styles["navbar-link"]}
                        >
                            Contact
                    </NavLink>
                    </li>
                    <li className={styles["navbar-item"]}>
                        <NavLink
                            to="/"
                            className={styles["navbar-link"]}
                        >
                            Blog
                    </NavLink>
                    </li>
                    <li className={styles["navbar-item"]}>
                        <NavLink
                            to="/"
                            className={styles["navbar-link"]}
                        >
                            Careers
                    </NavLink>
                    </li>
                </ul>
                <Button nav>Request Invite</Button>
            </nav>
        </Router>
    );
};

export default Navbar;