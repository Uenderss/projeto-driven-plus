import React from 'react'
import { Tela } from '../Elementos/Tela';
import  UserContext  from './UserContext';
import { useContext } from 'react';
import Plano from '../Elementos/Plano';
import Imagem from '../Elementos/Imagem';
import Preco from '../Elementos/Preco';

const Subscriptions = () => {
const {token}=useContext(UserContext);
console.log(token);
  return (
    <Tela>
      <h1>Escolha seu Plano</h1>
      <Plano>
        <Imagem></Imagem>
        <Preco></Preco>
      </Plano>
      <Plano></Plano>
      <Plano></Plano>
      {/* <p>{token}</p> */}
    </Tela>
  )
}

export default Subscriptions