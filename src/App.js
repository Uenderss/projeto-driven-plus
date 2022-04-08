import React, { useState } from "react";
import LoginPage from "./LoginPage";
import Cadastro from "./Cadastro";
import GlobalCss from "./GlobalCss";
import Home from './Paginas/Home';
import Subscriptions from "./Paginas/Subscriptions";
import SubscriptionsId from "./Paginas/SubscriptionsId";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './Paginas/UserContext.js';



const App = () => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  // const [token,setToken]=useState(null);
  const [dados,setDados]=useState(null);
 

 
  return (
    <UserContext.Provider value={{dados,setDados}}>
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
        <Route path="/subscriptions/:id" element={<SubscriptionsId/>}/>
        
        
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
