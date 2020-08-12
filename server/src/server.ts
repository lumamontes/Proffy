/** Primeiro arquivo, tudo vai participar dele. vai definir todas as rotas*/
import express from 'express'
import cors from 'cors'
import routes from './routes';


const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

// porta que o servidor vai ouvir localhost:3333

app.listen(3333)