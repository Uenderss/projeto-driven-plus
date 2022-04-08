import React from "react";
import styled from "styled-components";
import axios from "axios";
// import  UserContext  from './UserContext';
// import { useContext } from 'react';

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tela } from "../Elementos/Tela";
import PlanoEscolhido from "../Elementos/PlanoEscolhido";
import ListarPlano from "../Elementos/ListarPlano.js";
import { Input } from "../Elementos/Input";
import { Button } from "../Elementos/Button";
import LogoPlano from "../Elementos/LogoPlano";
import Preco from "../assets/Preco";
import Beneficios from "../assets/Beneficios";
const SubscriptionsId = () => {
  const pagina = useParams();
  const [nome, setNome] = useState("");
  const [digitosDoCartao, setDigitosDoCartao] = useState("");
  const [codigoDeSeguranca, setCodigoDeSeguranca] = useState("");
  const [validade, setValidade] = useState("");
  const [plano, setPlano] = useState([]);

  // const {token}=useContext(UserContext);
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjA0LCJpYXQiOjE2NDkzMDQwODd9.6D4xpAaqh019PNeQpEkE2KcWoDaSK0R-v1K7MA_PPxg";
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
  
  useEffect(() => {
    
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${pagina.id}`,
        config
      )
      .then((response) => {
       if(response.data.perks.length > 0){
        setPlano(response.data);
       }
      })
      .catch((err) => console.log("conexão falhou"));
  }, [pagina.id]);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",  {
        membershipId: plano.id,
        cardName: nome,
        cardNumber: digitosDoCartao,
        securityNumber: codigoDeSeguranca,
        expirationDate: validade,
      },config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        alert("Cartão invalido. Tente novamente!");
        setNome("");
        setDigitosDoCartao("");
        setCodigoDeSeguranca("");
        setValidade("");
        console.log(error);
      });
  }
  return (
    <Tela>
      <Logotipo>
        <LogoPlano src={plano.image} name={plano.name} />
      </Logotipo>
      <PlanoEscolhido>
        <div>
          <p>
            <Beneficios /> Beneficios:
          </p>
        </div>
         {/* <div>
          {plano.perks?.length === 0 ? (
            <></>
          ) : (
            plano.perks.map((perk, index) => {
              const { id } = perk;
              return <p key={index}>{`${index + 1}. ${perk.title}`}</p>;
            })
          )}
        </div>  */}
        <div>
          <p>
            <Preco /> Preco:{" "}
          </p>
          <p> R$ {plano.price} cobrados mensalmente</p>
        </div>
      </PlanoEscolhido>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome impresso no cartão"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Digitos do Cartão"
          value={digitosDoCartao}
          onChange={(e) => setDigitosDoCartao(e.target.value)}
        />
        <div>
          <Input
            type="text"
            placeholder="Código de segurança"
            value={codigoDeSeguranca}
            onChange={(e) => setCodigoDeSeguranca(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Validade"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
          />
        </div>
        <Button type="submit" value="Submit">
          Assinar
        </Button>
      </form>
    </Tela>
  );
};

export default SubscriptionsId;

const Logotipo = styled.div`
  width: 164px;
  height: 157px;

  svg {
    max-width: 164px;
    margin: 0;
  }
`;
