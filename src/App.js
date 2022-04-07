import React, { useState } from "react";
import LoginPage from "./LoginPage";
import Cadastro from "./Cadastro";
import GlobalCss from "./GlobalCss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<LoginPage login={login} senha={senha} />} />
        <Route
          path="/cadastro"
          element={
            <Cadastro
              login={(login) => setLogin(login)}
              senha={(senha) => setSenha(senha)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
