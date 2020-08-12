import React from 'react';


import './styles.css'
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/input';



function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponívels">
                <form id="search-teachers">
                <Input name="subject" label="Matéria" />
                <Input name="week_day" label="Dia da semana" />
                <Input name="time" label="Hora" />
                </form>
            </PageHeader>

        <main>
         <TeacherItem></TeacherItem>
         <TeacherItem></TeacherItem>
         <TeacherItem></TeacherItem>
         <TeacherItem></TeacherItem>
         <TeacherItem></TeacherItem>
         <TeacherItem></TeacherItem>
        </main>

        </div>
    )
}


export default TeacherList;