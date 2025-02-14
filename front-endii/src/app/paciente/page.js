'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

      export default function Afis() {
        let [nome,setNome] = useState(undefined)
        let [medicos,setMedicos] = useState([
          ])
        const getMedicos = async (nome) =>{
            let response = await fetch('https://api-clinica-2a.onrender.com/pacientes');
            let data = await response.json();
            console.log(data,nome)
            if (typeof nome == 'undefined') {
                setMedicos(data);
                
            } else {
                data = data.filter(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
                setMedicos(data);
    
            
                
            }
            
            if (!response.ok) {
                throw new Error('Não foi possível buscar'+ response.statusText);
                }
            
            
    
    
        }
    
        useEffect(()=>{
            getMedicos(nome);
        },[nome]);
    return (
       

        <main className={styles.main}>
        <div className={styles.medicos_conteinar}> 
            <h2 className={styles.h2}> Lista de Paciente</h2>
            <button className={styles.buttonMedic}>Buscar Paciente</button>
           {/* <div className={styles.butão}>
                <div className={styles.selecione}> 
                    <h3>Selecione um médico</h3>
                    <input placeholder="Digite o nome do médico" type="text" value></input>
            
                </div>
    </div>*/}
       
        
           
            
            <div className={styles.tabelaContainer}>
                <table className={styles.tabela_medic}>
                    <thead className={styles.thead}>
                        <tr className={styles.tr}>
                            <th className={styles.th}>ID</th>
                            <th className={styles.th}>NOME</th>
                            <th className={styles.th}>TELEFONE</th>
                            <th className={styles.th}>EMAIL</th>
                            <th className={styles.th}>CPF</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                    {medicos.map((paciente)=>(
                        <tr className={styles.tro}  key={paciente.id}>
                            <td className={styles.td}>{paciente.id}</td>
                            <td className={styles.td}>{paciente.nome}</td>
                            <td className={styles.td}>{paciente.telefone}</td>
                            <td className={styles.td}>{paciente.email}</td>
                            <td className={styles.td}>{paciente.cpf}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            </div>

         {/*  <Image className={styles.img_sobre} src='/images/onca.webp' alt="gfg" width={450} height={500} />*/}
        </main>
         
);

}