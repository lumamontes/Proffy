import React from 'react'
import './style.css'

import whatsappIcon from '../../assets/imagens/whatsapp.svg'

function TeacherItem() {
    return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/60052718?s=460&u=2289fd37f55ca4ef7a5ac06f250b7ac50cc51e00&v=4" alt="Luma montes" />
            <div>
                <strong>Luma Montes</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
            Lorem ipsum
            <br /><br />
            Lorem ipsum ctetur adipisicing elit. Voluptates explicabo delectus quos dignissimos, id repudiandae? Eum dolor dolore ipsa sint nemo sit consequuntur ea, explicabo accusamus nisi minima ipsam saepe.
        </p>
        
        <footer>
            <p>
             Preço/Hora
            <strong> R$ 80,00</strong>
            </p>
            <button type='button'>
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    )
    }

export default TeacherItem