import React from 'react';
import logoImg from '../../assets/imagens/logo.svg'

function Landing (){
    return (
        <div id="page-landing">
            <div className="container" id="page-landing-content">
              <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Sua plataforma de estudos online</h2>
              </div>

              <img src="" alt="" className="hero-image"/>
            </div>
        </div>

    )
}

export default Landing;