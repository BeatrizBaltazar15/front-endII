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
                <Image className={styles.img} src='/images/pg.png' alt=" logo " width={55} height={200} />
                
            </div>

            {isMenuOpen &&
                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.lista}>
                        <li>
                            <Link className={styles.link} href='/'>Home</Link>
                        </li>

                        <li>
                            <Link className={styles.link} href="/medico">Médico</Link>
                            <ul className={styles.submenu}>
                            <li className={styles.sub}>
                                <a href="/medico"> Listar</a>
                            </li>

                            <li className={styles.sub}>
                                <a href="/medico"> Adicionar</a>
                            </li>

                            <li className={styles.sub}>
                                <a href="/medico"> Editar</a>
                            </li>

                            <li className={styles.sub}>
                                <a  href="/medico"> Excluir</a>
                            </li>
                         </ul>
                        </li>
                     

                        <li>
                            <Link className={styles.link} href="/paciente">Paciente</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/consulta">Consulta</Link>
                        </li>
                        {/* <li>
                            <Link className={styles.link} href="/props">Dúvidas</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/filtro">filtro</Link>
                        </li>
                        <li>
                            <Link className={styles.link} href="/efeitos">Efeitos</Link>
                        </li> */}
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