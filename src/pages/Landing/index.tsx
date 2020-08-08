import React from 'react';
import logoImg from '../../assets/imagens/logo.svg'
import landingImg from '../../assets/imagens/landing.svg'

import studyIcon from '../../assets/imagens/study.svg'
import giveClassesIcon from '../../assets/imagens/give-classes.svg'
import purpleHeartIcon from '../../assets/imagens/purple-heart.svg'

import './style.css';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Educar" />
                    <h2>Sua plataforna de estudos online</h2>
                </div>

                <img 
                src={landingImg} 
                alt="Plataforma de estudos" 
                className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar" />
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
                        Dar aulas
                    </a>
                </div>

                <span className="total-connections">
                    Todal de 200 conexões <img src={purpleHeartIcon} alt="Conexões" />
                </span>
            </div>
        </div>
    )
}

export default Landing;