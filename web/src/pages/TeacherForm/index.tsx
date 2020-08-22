import React from 'react';
import PageHeader from '../../components/pageHeader';
import './styles.css'
import Input from '../../components/input';

import warningIcon from '../../assets/imagens/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome Completo" />
                    <Input name="Avatar" label="Avatar" />
                    <Input name="whatsapp" label="whatsapp" />
                    <Textarea name="bio" label="Biografia" > </Textarea>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select name="subject" label="Matéria" />
                    <Input name="Cost" label="Custo da sua hora por aula" />
                </fieldset>


                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso Importante"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>

                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
        
            </main>
        </div>

    )
}

export default TeacherForm