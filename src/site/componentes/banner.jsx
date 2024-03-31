import React from 'react';

function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Ajude o andrius e o carlão  melhorar sua jogabilidade.</h1>
                    <h4>Doe alguns centamos para eles comprarem oculos e arrumarem o dedo.</h4>
                    <button type="button" className="btn btn-dark btn-lg btn-banner  btn-primary">Criar uma conta</button>
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
