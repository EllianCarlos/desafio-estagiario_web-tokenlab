const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const EventController = require('./app/controllers/EventController');
import SessionController from './app/controllers/SessionController';

const routes = Router();

// import authMiddleware from "./app/middlewares/authentication";

// routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.post('/users', UserController.store);
routes.post('/users/show', UserController.show);
routes.delete('/users', UserController.delete);

routes.post('/session', SessionController.store);

routes.get('/eventos', EventController.index);
routes.put('/eventos', EventController.update);
routes.post('/eventos', EventController.store);
routes.post('/users/eventos/', EventController.show);
// routes.post('/eventos/', EventController.show);
routes.delete('/eventos', EventController.delete);


module.exports = routes;
