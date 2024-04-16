import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe BrowserRouter, Routes e Route
import Site from './site/site.jsx';
/*import Login from './app/Login/login.jsx';*/
import Login2 from './app/Login/login2.jsx'
import CadastroUsuario from './app/CadastroUsuario/cadastroUsuario.jsx';
import ResetSenha from './app/ResetarSenha/resetSenha.jsx';
import Home from './app/Home/home.jsx';
import Teste from './site/Testes/testes.jsx';




function Central(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Site />} />
          <Route path='/app' element={<Login2 />} />
          <Route path='/app/cadastro' element={<CadastroUsuario />} />
          <Route path='/app/resetpassword' element={<ResetSenha />} />
          <Route path='/app/home' element={<Home/>} />
          <Route path='/app/teste' element={<Teste/>} />
          
        </Routes>
      </BrowserRouter>
    );
}

export default Central;


