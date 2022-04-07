import React, { useState } from "react";
import { Tela } from "./Elementos/Tela.js";
import { Input } from "./Elementos/Input.js";
import { Button } from "./Elementos/Button.js";
import { StyledLink } from "./Elementos/StyledLink";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CpfCnpj from "./Elementos/CpfCnpj.js";

const Cadastro = (props) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");
  const [senha, setSenha] = useState("");
  console.log(mask);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(cpfCnpj);
    axios
      .post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up", {
        email: email,
        name: nome,
        cpf: cpfCnpj,
        password: senha
      })
      .then(function (response) {
        props.login(email);
        props.senha(senha);
        navigate("/");
        console.log(response);
      })
      .catch(function (error) {
        alert("Não foi possivel realizar o cadastro Tente novamente");
        setNome("");
        setCpfCnpj("");
        setSenha("");
        setEmail("");

        console.log(error);
      });
  }

  return (
    <Tela>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <CpfCnpj
          type="text"
          placeholder="CPF"
          value={cpfCnpj}
          onChange={(e, type) => {
            setCpfCnpj(e.target.value);
            setMask(type === "CPF");
          }}
        />
        <Input
          type="email"
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
        <StyledLink to="/">Já possuí uma conta? Entre</StyledLink> 
      </form>
      
    </Tela>
  );
};

export default Cadastro;
