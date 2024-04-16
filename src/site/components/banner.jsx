import React from 'react';
import {Link} from 'react-router-dom'
import Login2 from '../../app/Login/login2';


function Banner(){
    return <section id="banner">
        <div className="container">
            <div className="row">

                <div className="col-lg-6">
                    <h1>Invista em sua SAÚDE: a prevenção é a chave para uma VIDA plena.</h1>
                    <br />
                    <br />
                    <h4>Descubra como pequenos cuidados diários podem fazer toda a diferença em sua jornada de bem-estar.</h4>
                    <a href="/app/cadastro" className="btn btn-dark btn-lg btn-banner btn-primary">Criar uma conta</a>
                    <Link to = '/app' className="btn btn-outline-light btn-lg btn-banner">Fazer Login</Link>
                </div>

                <div className="col-lg-6">
                   {/* <img src="Images/screenshot-crm.png" /> */}
                    <img src="images/douglas.png" className="imagem-redimensionada" alt="Imagem do banner"/>
                </div>
       
            </div>
        </div>
    </section>;
  }

export default Banner;
