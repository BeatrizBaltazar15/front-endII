'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
export default function Sobre() {
    let [medicos,setMedicos] = useState([{
        "id": 1,
        "nome": "Alice Alves Nogueira",
        "telefone": "(69) 99932-9014",
        "especialidade":"Anestesiologia"},
        {
          "id": 2,
          "nome": "Alce Silva",
          "telefone": "(99) 99999-9999",
          "especialidade":"Anestesiologia"}
      ])
    return (
       

        <main>
            <div className={styles.medicos_conteinar}> 
            <h2 className={styles.h2}> Lista de Médicos</h2>
            <button className={styles.buttonMedic}>Buscar Médicos</button>
            <table className={styles.tabela_medic}>
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
                {medicos.map((medico)=>(
                    <tr className={styles.tro}  key={medico.id}>
                        <td className={styles.td}>{medico.id}</td>
                        <td className={styles.td}>{medico.nome}</td>
                        <td className={styles.td}>{medico.telefone}</td>
                        <td className={styles.td}>{medico.especialidade}</td>
                    </tr>

                ))}
                </tbody>
            </table>
            </div>

         {/*  <Image className={styles.img_sobre} src='/images/onca.webp' alt="gfg" width={450} height={500} />*/}
        </main>
         
);

}