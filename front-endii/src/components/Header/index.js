'use client';

import Link from "next/link"
import React, { useState } from 'react';
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>

            <div className={styles.logo}>
                <Image className={styles.img} src='/images/logo2.webp' alt=" logo " width={55} height={200} />
                
            </div>

            {isMenuOpen &&
                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.lista}>
                        <li>
                            <Link className={styles.link} href='/'>Animais</Link>
                        </li>

                        <li>
                            <Link className={styles.link} href="/sobre">Selvagens</Link>
                        </li>

                        <li>
                            <Link className={styles.link} href="/state">Domésticos</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/listas">Raças</Link>
                        </li>
                    </ul>
                </nav>
            }
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isMenuOpen ? <Image className={styles.img} src='/images/X.webp' alt=" logo " width={55} height={200} /> : <Image className={styles.img} src='/images/open3.png' alt=" logo " width={55} height={200} />}
            </button>
        
        </header>
    );
};

export default Header;