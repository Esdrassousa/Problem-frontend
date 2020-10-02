import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'
import api from '../../services/api'

export default function Problemas () {


    const [cad, setCad] = useState();
    const [resposta, setResposta] = useState([]);
    const [id, setId] = useState('');
    const history = useHistory();


    const id_problema = localStorage.getItem('id_problema')

    

    useEffect(() => {
        api.get(`Resposta/${id_problema}`).then(response => {
            setResposta(response.data)

                })
    }, [id_problema]) 

    

    



    return (
        <div className='Respostas'>

          <a href="/Problemas">Volta Problemas</a>
          <a href="/Resposta/New">Cadastrar Nova Resposta</a>
            <ul>
            {resposta.map(Respostas => (
            <li key={Respostas.id}>
                        <strong>Descrição</strong>
                        <textarea>{Respostas.Resposta}</textarea>
                        
                    </li>
                    ))}
            </ul>
            
        
        </div>
        
    )
}