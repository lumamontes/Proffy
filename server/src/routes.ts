import express from 'express'
import ClassesControler from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router()
const classesControllers = new ClassesControler
const connectionsController = new ConnectionsController
// definir rota
routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)
routes.post('/connections', connectionsController.create)
routes.get('/connections', connectionsController.index)


export default routes;