import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Douglas esse CRM é para vc .</h1>
                    <h4>Plano de Saúde São José.</h4>
                    <button type="button" className="btn btn-dark btn-lg btn-banner btn-primary">Criar uma conta</button>
                    <button type="button" className="btn btn-outline-light btn-lg btn-banner">Fazer Login</button>
                </div>

                <div className="col-lg-6">
                   {/* <img src="Images/screenshot-crm.png" /> */}
                    <img src="Images/nome.png" />
                </div>
       
            </div>
        </div>
    </section>;
  }

export default Banner;
