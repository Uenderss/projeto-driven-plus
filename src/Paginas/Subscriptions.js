import React from "react";
import { Tela } from "../Elementos/Tela";
// import  UserContext  from './UserContext';
// import { useContext } from 'react';
import Plano from "../Elementos/Plano";
import Imagem from "../Elementos/Imagem";
import Preco from "../Elementos/Preco";
import LogoPlano from "../Elementos/LogoPlano";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Subscriptions = () => {
  // const {token}=useContext(UserContext);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA0LCJpYXQiOjE2NDkzMDQwODd9.6D4xpAaqh019PNeQpEkE2KcWoDaSK0R-v1K7MA_PPxg";
    
  const [planos, setPlanos] = useState([{}]);


  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .get(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
        config
      )
      .then((response) => {
        setPlanos(response.data);
        console.log(response.data.map((plano) => plano.id));
        console.log(response.data.map((plano) => plano.image));
        console.log(response.data.map((plano) => plano.price));
      })
      .catch((err) => console.log("deu erro"));
      
      

  }, []);
 

  return (
    <Tela>
      <h1>Escolha seu Plano</h1>
    {
      planos.map((plano)=>{
        const {id,image,price}=plano;
        return(
          <Link to={`/subscriptions/${id}`}>
          <Plano >
          <Imagem key={id}>
            <LogoPlano src={image} alt={`logo`}/>
          </Imagem>
          <Preco>
            <p>{price}</p>
          </Preco>
        </Plano>
        </Link>
        );
      })
    }
     
    </Tela>
  );
};

export default Subscriptions;
