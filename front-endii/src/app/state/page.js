import Image from "next/image";
import styles from "./state.module.css";
export default function Sobre() {
    return (
        <main>
            <h1>Gatos </h1>
            <Image className={styles.img} src='/images/gato.avif' alt=" Raposa" width={625} height={500} />
        </main>

    );
}