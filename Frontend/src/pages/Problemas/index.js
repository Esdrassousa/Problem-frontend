import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import api from '../../services/api'

export default function Problemas () {


    const [cad, setCad] = useState();
    const [problema, setProblema] = useState([]);
    const [id, setId] = useState('');
    const history = useHistory();


    const Tema = localStorage.getItem('Tema')

    console.log(Tema)

    useEffect(() => {
        api.get(`Problemas/${Tema}`).then(response => {
            setProblema(response.data)

                })
    }, [Tema]) 

    async function MudarParaRespostas(id){
        try{

            await localStorage.setItem('id_problema', id)
            history.push('/Respostas');

        }catch(e){

        }
    }


    



    return (
        <div className='Problema'>
          <a href = '/Problemas/cadastro'>Cadastar Novo Problema</a>
          <a href = '/Temas'>Voltar Temas</a>
            <ul>
            {problema.map(Problemas => (
            <li key={Problemas.id}>
                        <strong>Titulo:</strong>
                        <p>{Problemas.Titulo}</p>
                        <strong>Descrição</strong>
                        <textarea>{Problemas.Descricao}</textarea>
                        <button className='button' onClick={()=>MudarParaRespostas(Problemas.id)}>Ver Respostas</button>
                    </li>
                    ))}
            </ul>
            
        
        </div>
        
    )
}