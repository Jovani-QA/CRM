import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Importe BrowserRouter, Routes e Route
import Site from './site/site.jsx';
import Login from './app/login.jsx';

function Central(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Site />} />
          <Route path='/appaa' element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Central;


