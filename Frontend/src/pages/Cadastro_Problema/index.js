import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api';
import axios from 'axios'

export default function New_Resposta() {

    const [Titulo, setTitulo] = useState('');
    const [Descricao, setDescricao] = useState('');
  
    const history = useHistory();


    async function sub(e) {
        e.preventDefault()
        
        const Tema = localStorage.getItem('Tema')

        const data = {
            Tema:Tema,
            Titulo,
            Descricao

        }

        try {

           const response =  await api.post('Problemas', data , {
            
        })
            alert('cadastrado')

            history.push('/Problemas')

        } catch (e) {
            alert('erro')
        }
    }


    return (

        <div className='CadastroProblema'>
            <span>Cadastre novo Problema</span>

            

            <form onSubmit={sub}>
                <input
                placeholder="Titulo"
                value={Titulo}
                onChange={e => setTitulo(e.target.value)}
                />
                <a href='Problemas'>Voltar Problemas</a>
                <textarea
                    placeholder="Descricao"
                    value={Descricao}
                    onChange={e => setDescricao(e.target.value)}
                />


               

                <button className='butto' type='submit'>Cadastrar</button>
            </form>
        
        </div>
    )
}
