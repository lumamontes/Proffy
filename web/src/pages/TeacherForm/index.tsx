import React from 'react';
import PageHeader from '../../components/pageHeader';
import './styles.css'
import Input from '../../components/input';

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


                </fieldset>
            </main>
        </div>

    )
}

export default TeacherForm