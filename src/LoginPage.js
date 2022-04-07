import React from "react";
import { Tela } from "./Elementos/Tela.js";
import { Input } from "./Elementos/Input.js";
import { Button } from "./Elementos/Button.js";
import { StyledLink } from "./Elementos/StyledLink";
import Logo from "./Elementos/Logo";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./Paginas/UserContext.js";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const {setToken}=useContext(UserContext);

  if(props.login.length > 0){
     setEmail(props.email);
     setSenha(props.senha);
  } 
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("email",email);
    console.log("senha",senha);
    
    axios
      .post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/login", {
        email,
        password:senha
      }).then(function (response) {
        setToken(response.data.token);
        response.data.membership === null ? navigate("/subscriptions")
          : navigate("/home");
          
      }).catch(function (error) {
        alert("Email ou senha invalido. Tente novamente!");
        setSenha("");
        setEmail("");
        console.log(error);
      });
  }
  return (
    <Tela>
      <Logo />
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button type="submit" value="Submit">
          Entrar
        </Button>
      </form>
      <StyledLink to="/cadastro">Não possuí uma conta? Cadastre-se</StyledLink>
    </Tela>
  );
};

export default LoginPage;
