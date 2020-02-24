const { Router } = require('express');

const UserController = require('./app/controllers/UserController');
const EventController = require('./app/controllers/EventController');

const routes = Router();

// import authMiddleware from "./app/middlewares/authentication";

// routes.use(authMiddleware);

routes.get('/users', UserController.index);
routes.put('/users', UserController.update);
routes.post('/users', UserController.store);
routes.delete('/users', UserController.delete);


routes.get('/eventos', EventController.index);
routes.put('/eventos', EventController.update);
routes.post('/eventos', EventController.store);
routes.post('/users/eventos/', EventController.show);
// routes.post('/eventos/', EventController.show);
routes.delete('/eventos', EventController.delete);


module.exports = routes;
