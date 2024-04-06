import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe BrowserRouter, Routes e Route
import Site from './site/site.jsx';
import Login from './app/login/login.jsx';
import CadastroUsuario from './app/cadastroUsuario/cadastroUsuario.jsx';

function Central(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Site />} />
          <Route path='/app' element={<Login />} />
          <Route path='/app/cadastro' element={<CadastroUsuario />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Central;


