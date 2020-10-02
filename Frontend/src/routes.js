import React, { Component } from 'react'
import {BrowserRouter, Route, Switch , Redirect} from 'react-router-dom'

import Temas from './pages/Temas'
import New_Tema from './pages/Cadastro_Tema'
import Cadastro_Problema from './pages/Cadastro_Problema'
import Respostas from './pages/Respostas'
import Problemas from './pages/Problemas'
import New_Resposta from './pages/new_Resposta'

function isauthe(){
   const token = localStorage.getItem('token') 
   if(token){
       return true
   }
   
}

//Validação do token

const  PrivateRoute = ({component:Component, ... rest})=>(
    <Route  {...rest}  render={props=> (
      isauthe()  ? (
          <Component{...props}/>
      ):(
          <Redirect to={{pathname:'/' , state:{from : props.location}}}/>
      )
    )} />
    
)

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Temas" exact component={Temas}></Route>
                <Route path="/Temas/cadastro" component={New_Tema}></Route>
                <Route path='/Problemas/cadastro' component={Cadastro_Problema}></Route>
                <Route path= "/Respostas" component={Respostas}></Route>
                <Route path= '/Problemas' component={Problemas}></Route>
                <Route path='/Resposta/New' component={New_Resposta}></Route>
            </Switch>
        </BrowserRouter>
    )
}