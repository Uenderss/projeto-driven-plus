import { Tela } from "../Elementos/Tela";
import UserContext from "./UserContext";
import { useContext } from "react";
import Plano from "../Elementos/Plano";
import Imagem from "../Elementos/Imagem";
import Preco from "../Elementos/Preco";
import LogoPlano from "../Elementos/LogoPlano";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Subscriptions = () => {
  
  const { dados } = useContext(UserContext);
 
  const config = {
    headers: { Authorization: `Bearer ${ dados.token }` },
  };
  const [planos, setPlanos] = useState([{}]);
  

  useEffect(() => {
    
    axios
      .get(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
        config
      )
      .then((response) => {
        setPlanos(response.data);
        console.log("isso", response.data);
      })
      .catch((err) => console.log("deu erro"));
  }, []);

  return (
    <Tela>
      <h1>Escolha seu Plano</h1>
      {planos.map((plano) => {
        const { id, image, price } = plano;
        return (
          <Link key={id} to={`/subscriptions/${id}`}>
            <Plano>
              <Imagem>
                <LogoPlano src={image} alt={`logo`} />
              </Imagem>
              <Preco>
                <p>{price}</p>
              </Preco>
            </Plano>
          </Link>
        );
      })}
    </Tela>
  );
};

export default Subscriptions;
