import styles from "./sobre.module.css";
import Image from "next/image";
export default function Sobre() {
    return (
        <main>
            <h1> Selvagens </h1>
            <p> 
            </p>


            <Image className={styles.img_sobre} src='/images/onca.webp' alt="gfg" width={450} height={500} />
        </main>
         
);
}