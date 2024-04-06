import React from 'react';
import Header from './components/header';
import Banner from './components/banner';
import Feactures from './components/feactures';
import Testemunho from './components/testemunho';
import Precos from './components/precos';
import Footer from './components/footer';
/*import Banner from './componentes/banner';*/


function Site(){
    return<div>
      <Header/>
      <Banner/>
      <Feactures/>
      <Testemunho/>
      <Precos/>
      <Footer/>
    </div>;

    
  }
  
  export default Site;
