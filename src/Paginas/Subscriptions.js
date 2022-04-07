import React from 'react'
import { Tela } from '../Elementos/Tela';
// import  UserContext  from './UserContext';
// import { useContext } from 'react';
import Plano from '../Elementos/Plano';
import Imagem from '../Elementos/Imagem';
import Preco from '../Elementos/Preco';
import LogoPlano from '../Elementos/LogoPlano';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.production.min';

const Subscriptions = () => {
  // const {token}=useContext(UserContext);
  const [planos,setPlanos]=useState([]);

  const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA0LCJpYXQiOjE2NDkzMDQwODd9.6D4xpAaqh019PNeQpEkE2KcWoDaSK0R-v1K7MA_PPxg";
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};

useEffect(() => {
  axios.get("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships" , config).then( (response) => setPlanos(response)).catch(err => console.log('deu erro'));
  console.log(planos.data.map((e) => e))

},[]);
  return (
    <Tela>
      <h1>Escolha seu Plano</h1>
      
      <Plano to="/subscriptions/1">
        <Imagem>
          <LogoPlano cor={"white"}/>
        </Imagem>
        <Preco><p>R$39,99</p></Preco>
      </Plano>
     
      
      {/* <p>{token}</p> */}
    </Tela>
  )
}

export default Subscriptions