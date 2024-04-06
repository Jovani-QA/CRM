import React from 'react';

function Testemunho(){
    return <section id="testemunho">
        <div className="container">

        <div id="carouselExampleInterval" className="carousel carousel-dark  slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <h2>Melhore</h2>
                        <img src="Images/checar.png"/>                
                       {/* <em>Marcio Martins - São Paulo</em> */}
                    </div>      

                    <div className="carousel-item" data-bs-interval="4000">
                        <h2>Piore.</h2>
                        <img src="Images/crm.png"/>                
                        {/*<em>João Silva - Rio de Janeiro</em>*/}
                    </div>      

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        
        </div>
    </section>;
  }

export default Testemunho;