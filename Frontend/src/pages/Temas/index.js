import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { FiLogIn } from 'react-icons/fi'
import './styles.css'
import api from '../../services/api'





export default function Cadastro() {
    
    const [cad, setCad] = useState();
    const [tema, setTema] = useState([]);
    const [id, setId] = useState('');
    const history = useHistory();

     async function Buscar(e) {
        e.preventDefault();

        try {

            await api.get('Temas')

            await localStorage.setItem('Tema', Tema)

            console.log('Tema')
             await api.get('Temas').then(response => {
                setTema(response.data)

                })
                
 


            await setCad(tema.map(Temas => (
                <li key={Temas.Tema}>
                    
                    <button className='button' onClick={()=>MudarParaProblemas(Temas.Tema)}>{Temas.Tema}</button> 

                </li>
                
            )));
           



        } catch (e) {
            alert('nao encontrado')
            

        }

    }

    
    const Tema =  localStorage.getItem('Tema')

    useEffect(() => {
        api.get('Temas').then(response => {
            setTema(response.data)

                })
    }, []) 

    

      useEffect(() =>{
        setCad((tema.map(Temas => (
            <li key={Temas.Tema}>
                
                
                <button className='button' onClick={()=>MudarParaProblemas(Temas.Tema)}>{Temas.Tema}</button>
                
            </li>,
            localStorage.setItem('Tema', Temas.Tema)
            
        ))))
    }, []) 
    
   

    async function MudarParaProblemas(Tema){
        try{

            await localStorage.setItem('Tema', Tema)
            history.push('/Problemas');

        }catch(e){

        }
    }
    
    return (

        <div className='BuscaTema'>
            <header>

                <a href='Temas/cadastro'>Cadastrar Novo Tema</a>

                <form onSubmit = {Buscar} >
                    <a> Buscar Temas</a>
                    <button type='submit'>

                        <FiSearch setClick='submit' size={20} color="#e02041" />
                    </button>
                    
                </form>


        
            </header>

            <ul>
                {cad}
            </ul>

      

        </div>
    )
}