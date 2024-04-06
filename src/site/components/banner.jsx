import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Automatize seus processos com CODEBEM.</h1>
                    <h4>Mantenha a organização do seu negócio gerenciando seus clientes e leads..</h4>
                    <a href="/app/cadastro" className="btn btn-dark btn-lg btn-banner btn-primary">Criar uma conta</a>
                    <a href="/app" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</a>
                </div>

                <div className="col-lg-6">
                   {/* <img src="Images/screenshot-crm.png" /> */}
                    <img src="Images/screenshot-crm.png" />
                </div>
       
            </div>
        </div>
    </section>;
  }

export default Banner;
