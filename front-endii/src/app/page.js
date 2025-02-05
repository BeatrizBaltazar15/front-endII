import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    
    
   
    

      <div>
        <h1 className={styles.h1}>Homee</h1>
        <p></p>
        <Image className={styles.img} src='/images/' alt=" " width={625} height={500} />
      
      </div>

    
  );
}