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


  svg{
    margin: 100px auto;
  }
  h1 {
    left: 14.93%;
    right: 14.93%;
    margin:24px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #ffffff;
  }
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
  form div{
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width:300px;
    margin: 0;
    padding: 0;
  }
  form div input {
    width: 145px;
    margin:0;
    padding:0;
    text-align: left;
    &::placeholder{
     font-size:12px;
    }
  }
`;
