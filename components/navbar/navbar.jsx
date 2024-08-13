/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Logo from '../../assets/images/logo.svg';
import styles from './navbar.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarList = ["Home", "New", "Popular", "Trending", "Categories"];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <img src={Logo} alt='logo' className={styles.logo} />
            {/* <IconButton 
                className={styles.menuIcon} 
                onClick={toggleMenu} 
                color="inherit"
            >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton> */}
            <ul className={`${styles.navbarList} ${isMenuOpen ? styles.open : ''}`}>
                {navbarList.map((item, index) => (
                    <li key={index} className={styles.navItem}>{item}</li>
                ))}
            </ul>
        </nav>
    );
}
