import styles from "./page.module.css";
import Image from "next/image";
export default function Home() {
  return (
    
    
   
    

      <div>
        <h1 className={styles.h1}>Animais</h1>
        <p>Os animais são encontrados em diferentes locais e adotam diferentes hábitos de vida, existindo, por exemplo, espécies sésseis, espécies que se locomovem livremente e aquelas que adotam hábito de vida parasitário, vivendo sob ou no interior de outros seres vivos.</p>
        <Image className={styles.img} src='/images/raposa.webp' alt=" Raposa" width={625} height={500} />
      
      </div>

    
  );
}