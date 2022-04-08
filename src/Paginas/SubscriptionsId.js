import React, { useContext , useState, useEffect } from "react";
import styled from "styled-components";

import  UserContext  from './UserContext';
import { useParams , useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

import Fechar from "../assets/Fechar";
import Preco from "../assets/Preco";
import Voltar from "../assets/Voltar";
import Beneficios from "../assets/Beneficios";

import { Tela } from "../Elementos/Tela";
import PlanoEscolhido from "../Elementos/PlanoEscolhido";
import { Input } from "../Elementos/Input";
import { Button } from "../Elementos/Button";
import LogoPlano from "../Elementos/LogoPlano";



const SubscriptionsId = () => {
  
  const {dados,setDados}=useContext(UserContext);
  console.log();
  const config = {
    headers: { Authorization: `Bearer ${dados.token}` },
  };
  const pagina = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [digitosDoCartao, setDigitosDoCartao] = useState("");
  const [codigoDeSeguranca, setCodigoDeSeguranca] = useState("");
  const [validade, setValidade] = useState("");
  const [plano, setPlano] = useState(null);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  



  useEffect(() => {
    
    axios
      .get(
        `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${pagina.id}`,
        config
      )
      .then((response) => {
        console.log("Plano Escolhido",response.data);
        setPlano(response.data);
      })
      .catch((err) => console.log("conexão falhou"));
  }, [pagina.id]);

  function handleSubmit(e) {
    e.preventDefault();
    setIsOpen(false);
    axios
      .post(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
        {
          membershipId: plano.id,
          cardName: nome,
          cardNumber: digitosDoCartao,
          securityNumber: codigoDeSeguranca,
          expirationDate: validade,
        },
        config
      )
      .then(function (response) {
        setDados(response.data);
        navigate("/home");
  
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

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
  
  }

  function closeModal(e) {
    e.stopPropagation();
    setIsOpen(false);
  }

  return (
    <Tela id="telaModal">
      <Voltar url="/subscriptions" />
      <Logotipo>
        <LogoPlano src={plano && plano.image} name={plano && plano.name} />
      </Logotipo>
      <PlanoEscolhido>
        <h2>
          <Beneficios /> Beneficios:
        </h2>
        <div>
          {plano != null ? (
            plano.perks.map((perk, index) => {
              const { title } = perk;
              return <p key={index}>{`${index + 1}. ${title}`}</p>;
            })
          ) : (
            <></>
          )}
        </div>
        <div>
          <h2>
            <Preco /> Preco:{" "}
          </h2>
          <p> R$ {plano && plano.price} cobrados mensalmente</p>
        </div>
      </PlanoEscolhido>

      <form>
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
            <MeuModal>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          appElement={document.getElementById('app')}
        >
          <Caixa>
            <div>
              <BotaoFechar>
                <Fechar />
              </BotaoFechar>
              <h2>
                Tem certeza que deseja assinar o plano {plano && plano.name} (R${" "}
                {plano && plano.price})?
              </h2>
            </div>
            <div>
              <BotaoNao onClick={closeModal}>Não</BotaoNao>
              <BotaoSim onClick={handleSubmit}>Sim</BotaoSim>
            </div>
          </Caixa>
        </Modal>
        </MeuModal>
      </form>
      <Button onClick={(e) => openModal(e)}>Assinar</Button>
    </Tela>
  );
};

export default SubscriptionsId;

const MeuModal=styled.div`
  .ReactModal__Overlay.ReactModal__Overlay--after-open{
      background-color: rgba(0,0,0,0.75);
  }

`;

const Logotipo = styled.div`
  width: 164px;
  height: 157px;

  svg {
    max-width: 164px;
    margin: 0;
  }
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "15px",
  },
};

const BotaoSim = styled.button`
  width: 95px;
  height: 52px;
  border: 0;
  margin: 7px;
  background: #ff4791;
  border-radius: 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`;
const BotaoNao = styled.button`
  width: 95px;
  height: 52px;
  border: 0;
  margin: 7px;
  background: "#CECECE";
  border-radius: 8px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  color: #ffffff;
`;
const BotaoFechar = styled.button`
  position: fixed;
  top: 0%;
  right: 0%;
  width: 28px;
  height: 25px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
  svg {
   
    border: 0;
  }
`;

const Caixa = styled.div`
  height: 190px;
  width: 228px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  div h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
  }
`;
