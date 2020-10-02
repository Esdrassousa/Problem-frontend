import React, { useState } from 'react'
import { Link ,useHistory} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api';
import axios from 'axios'

export default function New_Resposta() {

    const [Tema, setTema] = useState('');
    
  
    const history = useHistory();


    async function sub(e) {
        e.preventDefault()
        
       

        const data = {
            
            Tema
         
        }

        try {

           const response =  await api.post('Temas', data , {
            
        })
            alert('cadastrado')

            history.push('/Temas')

        } catch (e) {
            alert('erro')
        }
    }


    return (

        <div className='New_Tema'>
            <span>Cadastre novo Tema</span>
            <a href='Temas'>Voltar Temas</a>
            <form onSubmit={sub}>
                <input
                placeholder="Nome"
                value={Tema}
                onChange={e => setTema(e.target.value)}
                />
                
               

                <button className='butto' type='submit'>Cadastrar</button>
            </form>
        
        </div>
    )
}
