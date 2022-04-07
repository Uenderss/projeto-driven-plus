import React, { useState } from "react";
import LoginPage from "./LoginPage";
import Cadastro from "./Cadastro";
import GlobalCss from "./GlobalCss";
import Home from './Paginas/Home';
import Subscriptions from "./Paginas/Subscriptions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './Paginas/UserContext.js';


const App = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [token,setToken]=useState(null);
  return (
    <UserContext.Provider value={{token,setToken}}>
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        
        <Route
          path="/cadastro"
          element={
            <Cadastro
              login={(login) => setLogin(login)}
              senha={(senha) => setSenha(senha)}
            />
          }
        />
      
        <Route path="/" element={<LoginPage login={login} senha={senha} />} />
        <Route path="/home" element={<Home/>}/>
        <Route exact path="/subscriptions" element={<Subscriptions />}/>
        
        
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
