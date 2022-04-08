import React, { useContext } from "react";
import { Tela } from "../Elementos/Tela";
import UserContext from "./UserContext";
import { Button } from "../Elementos/Button";
import styled from "styled-components";
import usuario from '../assets/Vector.png';
import LogoPlano from "../Elementos/LogoPlano";
import { NavLink} from 'react-router-dom';
import axios from 'axios';

const Home = () => {

    
  const { dados } = useContext(UserContext);
  
 
  const config = {
    headers: { Authorization: `Bearer ${ dados.token }` },
  };
function cancelarPlano(){    
  
    axios
      .delete(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memb
        erships`,
        config
      )
      .then((response) => {
        alert("Excluido com sucesso")
        console.log("nayna",response);
        
      })
      .catch((err) => console.log("deu erro"));
  };

  return (
    <Tela>
      <Header>
        <Superior>
            <StyleImage><LogoPlano src={dados && dados.membership.image}/></StyleImage>
            <StyleUser><img src={usuario} alt="usuario"/></StyleUser>
        </Superior>
        
        <StyleNome><h2>{dados && dados.name}</h2></StyleNome>
      
      </Header>
      <Vantagens>
          {dados != null ? (
            dados.membership.perks.map((perk, index) => {
              const { title,link } = perk;
              return  <Button onClick={()=>{window.location.href =(link)}}key={index}>{`${index + 1}. ${title}`}</Button>;
                     
            })
          ) : (
            <></>
          )}
        </Vantagens>
      <Footer>
      <ButtonLink  to={"/subscriptions"}>Mudar Plano</ButtonLink>
      <Button style={{ background: "#FF4747" }  } onclick={cancelarPlano} >Cancelar Plano</Button>
      </Footer>
    </Tela>
  );
};

export default Home;

const ButtonLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 298px;
  height: 52px;
  left: 38px;
  top: 427px;
  border-radius: 8px;
  border: 0;
  background: #ff4791;
  color: #ffffff;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  margin: 16px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`;


const Vantagens=styled.div`
  button{
    margin:4px ;
  }
`
const Footer =styled.div`
  max-height: 128px;
  margin:8px;
  position: fixed;
  bottom: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button{
    margin: 4px;
  }
`;
const Header = styled.div`
  height: 123px;
  width: 299px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top:0;
 
  h2 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
  }
`;
const Superior=styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75%;
  margin-top: 22px;
 
`
const StyleImage=styled.div`
 
  width: 50%;
  img{
   width: 60%;
  }

`
const StyleNome = styled.div`
  width: 100%;
  height: 25%;
  text-align: center;
  
`
const StyleUser = styled.div`
  display: flex;
  justify-content:flex-end;
  align-items: flex-start;
  width: 50%;
  
`