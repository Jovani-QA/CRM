import React from 'react';
import Header from './componentes/header';
import Banner from './componentes/banner';
import Feactures from './componentes/feactures';
import Testemunho from './componentes/testemunho';
import Precos from './componentes/precos';
import Footer from './componentes/footer';
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
