import styled from "styled-components";

export const Tela = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0e0e13;
  padding: 34px;
  
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  form input {
    height: 52px;
    width: 299px;
    border-radius: 8px;
    background: #ffffff;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin: 8px;
    &::placeholder {
      color: #7e7e7e;
      text-indent: 1em;
    }
  }
`;
