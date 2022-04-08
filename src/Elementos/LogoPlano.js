import React from "react";
import styled from "styled-components";

const LogoPlano = (props) => {
  

  return (
    <>
      <img src={props.src} alt={props.alt}/>
      <Titulo>{props.name}</Titulo>
    </>
  );
};
export default LogoPlano;
const Titulo = styled.h2`
  

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  text-align: left;
  
  color: #ffffff;
`;