import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <h1>Meu título!</h1>
      <Image className={styles.img} src='/images/taekwondo.jpg' width={400} height={400} />
      <Image className={styles.img} src='/images/tkd.jpg' width={400} height={400} />
    </div >
  );
}
