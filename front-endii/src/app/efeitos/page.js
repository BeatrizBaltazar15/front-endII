'use client'
import { useEffect, useState } from "react"

export default function Efeitos() {
    
    const [ufs, setUfs] = useState([])
    const [estado, setEstado] = useState('')
    //const [cidade, setCidade] = useState('')
    
    const getUfs = async () => {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        //const cidade = await fetch ('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome')
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados: ' + response.statusText)
        }
        const data = await response.json();
        setUfs(data);
        console.log(data);
       
    }



    useEffect(() => {
       
        getUfs();
    }, [])

    return (
        <div>
            <h1>UseEffect/ Efeitos Colaterais </h1>
            <select
                onChange={(ev) => setEstado(ev.target.value)}
            >
                <option value="">Selecione o Estado</option>
                {ufs.map(uf => (
                    <option valeu={uf.id} key={uf.id}>{uf.nome}</option>
                ))}
            </select>
           
        </div>
    )
}