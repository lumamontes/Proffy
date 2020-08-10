/** Primeiro arquivo, tudo vai participar dele. vai definir todas as rotas*/
import express from 'express'


const app = express();
const irmas = [
    { name: 'lumazinha', age: 17},
    { name: 'luanis', age: 17},
]
// definir rota
app.get('/users', (request,response) => {
    return response.json(irmas)
});

// porta que o servidor vai ouvir localhost:3333

app.listen(3333)