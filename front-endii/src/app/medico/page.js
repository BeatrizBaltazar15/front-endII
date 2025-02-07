import styles from "./sobre.module.css";
import Image from "next/image";
export default function Sobre() {
    return (
        <main>
            <div className={styles.medicos_conteinar}> </div>
            <h2 className={styles.h2}> Lista de Médicos</h2>
            <button className={styles.buttonMedic}>Buscar Médicos</button>
            <table className={styles.tabelamedic}>
                <thead className={styles.thead}>
                    <tr className={styles.tr}>
                        <th className={styles.th}>ID</th>
                        <th className={styles.th}>NOME</th>
                        <th className={styles.th}>TELEFONE</th>
                        <th className={styles.th}>EMAIL</th>
                        <th className={styles.th}>ESPECIALIDADE</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    <tr className={styles.tr}>
                        <td className={styles.td}>1</td>
                        <td className={styles.td}>Dr. João Silva</td>
                        <td className={styles.td}>(11) 99999-0001</td>
                        <td className={styles.td}>joao.silva@email.com</td>
                        <td className={styles.td}>Clínica Geral</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>2</td>
                        <td className={styles.td}>Dra. Maria Oliveira</td>
                        <td className={styles.td}>(11) 99999-0002</td>
                        <td className={styles.td}>maria.oliveira@email.com</td>
                        <td className={styles.td}>Pediatria</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>3</td>
                        <td className={styles.td}>Dr. Pedro Santos</td>
                        <td className={styles.td}>(11) 99999-0003</td>
                        <td className={styles.td}>pedro.santos@email.com</td>
                        <td className={styles.td}>Cardiologia</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>4</td>
                        <td className={styles.td}>Dra. Ana Souza</td>
                        <td className={styles.td}>(11) 99999-0004</td>
                        <td className={styles.td}>ana.souza@email.com</td>
                        <td className={styles.td}>Pedriatria</td>
                    </tr>
                        <tr className={styles.tr}>
                        <td className={styles.td}>5</td>
                        <td className={styles.td}>Dr. Ricardo Lima</td>
                        <td className={styles.td}>(11) 99999-0005</td>
                        <td className={styles.td}>ricardo.lima@email.com</td>
                        <td className={styles.td}>Ortopedia</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>6</td>
                        <td className={styles.td}>Dra. Beatriz Mendes</td>
                        <td className={styles.td}>(11) 99999-0006</td>
                        <td className={styles.td}>beatriz.mendes@email.com</td>
                        <td className={styles.td}>Pediatria</td>
                    </tr>
                    <tr className={styles.tr}>
                        <td className={styles.td}>7</td>
                        <td className={styles.td}>Dr. Lucas Ferreira</td>
                        <td className={styles.td}>(11) 99999-0007</td>
                        <td className={styles.td}>lucas.ferreira@email.com</td>
                        <td className={styles.td}>Cardiologia</td>
                    </tr>
                        <tr className={styles.tr}>
                        <td className={styles.td}>8</td>
                        <td className={styles.td}>Dra. Carolina Ramos</td>
                        <td className={styles.td}>(11) 99999-00018</td>
                        <td className={styles.td}>carolina.ramos@email.com</td>
                        <td className={styles.td}>Clínica Geral</td>
                    </tr>
                </tbody>
            </table>


         {/*  <Image className={styles.img_sobre} src='/images/onca.webp' alt="gfg" width={450} height={500} />*/}
        </main>
         
);

}