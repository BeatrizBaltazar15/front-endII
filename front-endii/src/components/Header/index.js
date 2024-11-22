import Link from "next/link"
import styles from "./header.module.css"
export default function Header(){
    return (
        <header>
            <div>
            <nav>
                <ul className={styles.lista}>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                    <Link href='/sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
            <h2></h2>
            </div>
        </header>
    )
}