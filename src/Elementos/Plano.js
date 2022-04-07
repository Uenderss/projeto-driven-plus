import styled from "styled-components";
import {Link} from 'react-router-dom';

const Plano = styled(Link)`
  display: flex;
  cursor: pointer;
  justify-content: center;
  width: 290px;
  height: 180px;
  background: #0e0e13;
  border: 3px solid #7e7e7e;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 5px;
  text-decoration: none;
`;
export default Plano;

