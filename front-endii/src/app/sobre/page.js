import styles from "./sobre.module.css";
import Image from "next/image";
export default function Sobre() {
    return (
        <main>
            <h1> Cachorros </h1>
            <p> 
            </p>


            <Image className={styles.img_sobre} src='/images/cachorro.jpg' alt="gfg" width={450} height={500} />
        </main>
         
);
}