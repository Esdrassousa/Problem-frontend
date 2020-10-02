import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api';
import axios from 'axios'

export default function New_Resposta() {

    const [Resposta, setResposta] = useState('');
  



    async function sub(e) {
        e.preventDefault()
        
        const id_problema = localStorage.getItem('id_problema')

        const data = {
            id_Problema:id_problema,
            Resposta,

        }

        try {

           const response =  await api.post('Resposta', data , {
            
        })
            alert('cadastrado')

        } catch (e) {
            alert('erro')
        }
    }


    return (

        <div className='NovaResposta'>
            <span>Cadastre nova Resposta</span>
            <form onSubmit={sub}>
                
                <textarea
                    placeholder="Resposta"
                    value={Resposta}
                    onChange={e => setResposta(e.target.value)}
                />
               

                <button className='butto' type='submit'>Cadastrar</button>
            </form>
            <Link className='back' to='/Problemas'>
                <FiArrowLeft className='bit' size={22}></FiArrowLeft>Voltar
                    </Link>
        </div>
    )
}
